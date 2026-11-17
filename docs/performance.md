# ⚡ Performance considerations

The current dataset contains a small number of records, so client-side filtering is expected to be inexpensive. `filterEmployees` is called through `useMemo` with the dataset and active filters as dependencies.

## Current cost profile
- Initial data transfer is the complete JSON file.
- Filtering scans the array and checks name/email plus department.
- Cards are rendered for all matching records.
- Remote profile photos may add third-party network requests.
- There is no pagination, virtualization, server query, or image proxy.

## Practical guidance
Keep sample data small. Compress and resize profile images, use lazy loading, and remove unnecessary remote parameters. Measure the production build and browser behavior before introducing memoization libraries or virtualization.

## Scaling threshold
If the dataset becomes large, the main bottleneck will be downloading and rendering the full public array. Pagination alone does not make confidential data private. A scalable private directory requires server-side authorization, server-side search/pagination, and a protected data store.

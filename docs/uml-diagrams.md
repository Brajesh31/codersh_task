# 📐 UML and application diagrams

This page collects project-specific diagrams. Every diagram reflects the current static frontend; absent backend concepts are intentionally not modelled as if they existed.

## 1. System context
```mermaid
flowchart LR
  Visitor[Visitor browser] -->|HTTPS page/assets| StaticHost[Static hosting]
  StaticHost --> App[React application]
  StaticHost --> Json[Public employee JSON]
  App --> Json
  App <--> Prefs[Browser localStorage preferences]
  App --> Images[Optional image URLs]
```

## 2. Use-case diagram
```mermaid
flowchart LR
  Visitor((Visitor))
  Maintainer((Repository maintainer))
  subgraph Directory[Employee Directory]
    Browse[Browse employee cards]
    Search[Search by name or email]
    Filter[Filter by department]
    View[Open employee profile]
    Clear[Clear filters]
    Update[Update synthetic JSON records]
    Verify[Run lint, tests, and build]
    Publish[Publish static build]
  end
  Visitor --> Browse
  Visitor --> Search
  Visitor --> Filter
  Visitor --> View
  Visitor --> Clear
  Maintainer --> Update
  Maintainer --> Verify
  Maintainer --> Publish
```

## 3. Component hierarchy / class-style view
```mermaid
classDiagram
  class App {
    +render()
  }
  class Home {
    -employeeData
    -searchEmployee
    -selectedDept
    -selectedEmployee
    -status
    +loadEmployees()
    +clearFilters()
    +closeModal()
  }
  class EmployeeCard {
    +data
    +onSelect()
  }
  class EmployeeModal {
    +employee
    +onClose()
    -dialogRef
    -closeButtonRef
  }
  class EmployeeData {
    +normalizeEmployees(payload)
    +filterEmployees(rows, query, department)
  }
  App --> Home
  Home --> EmployeeCard
  Home --> EmployeeModal
  Home --> EmployeeData
```

## 4. Data-flow diagram
```mermaid
flowchart TD
  A[public/employeesData.json] --> B[Browser fetch]
  B --> C[normalizeEmployees]
  C --> D[React employee state]
  D --> E[filterEmployees]
  F[Search and department controls] --> E
  E --> G[EmployeeCard]
  G --> H[EmployeeModal]
  F <--> I[localStorage]
```

## 5. Application state diagram
```mermaid
stateDiagram-v2
  [*] --> Loading
  Loading --> Ready: JSON valid and normalized
  Loading --> Error: request or payload failure
  Error --> Loading: retry
  Ready --> Ready: search or department change
  Ready --> Empty: no matching results
  Empty --> Ready: clear filters or matching query
  Ready --> ProfileOpen: activate employee card
  ProfileOpen --> Ready: close, backdrop, or Escape
```

## 6. Profile-dialog sequence
```mermaid
sequenceDiagram
  actor Visitor
  participant Card as EmployeeCard
  participant Page as Home
  participant Dialog as EmployeeModal
  Visitor->>Card: Enter or Space
  Card->>Page: onSelect(employee)
  Page->>Dialog: Render employee prop
  Dialog->>Dialog: Save previous focus
  Dialog->>Visitor: Focus close button
  Visitor->>Dialog: Escape / close / backdrop
  Dialog->>Page: onClose()
  Page->>Dialog: Unmount
  Dialog->>Visitor: Restore focus and scroll
```

## 7. CI and release flow
```mermaid
flowchart TD
  Push[Push or pull request] --> Install[npm ci]
  Install --> Lint[ESLint]
  Lint --> Tests[Node unit tests]
  Tests --> Build[Vite production build]
  Push --> Docs[Documentation validation]
  Push --> SAST[CodeQL]
  PR[Pull request] --> Review[Dependency review]
  Schedule[Weekly schedule] --> Secret[Secret scan and dependency audit]
  Build --> Artifact[Build artifact]
  Artifact --> Host[Manual static-site publish]
```

## 8. Security trust boundary
```mermaid
flowchart LR
  Browser[Visitor-controlled browser] --> PublicSite[Static public site]
  PublicSite --> AppAssets[Compiled React assets]
  PublicSite --> Data[Public synthetic JSON]
  Browser --> Local[Visitor-controlled localStorage]
  Missing[No server-side auth, DB, or authorization] -. current boundary .- PublicSite
```

## Not applicable
No entity-relationship diagram, login/session sequence, authorization flow, API request pipeline, database class model, or server-side backup diagram is included because the current repository does not implement those systems.

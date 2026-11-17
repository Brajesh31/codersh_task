# 🧱 Technical debt register

| ID | Debt | Consequence | Suggested resolution |
| --- | --- | --- | --- |
| TD-01 | Department values are duplicated between data and UI | Filter options can drift | Derive unique departments from normalized rows |
| TD-02 | No component/browser test harness | Dialog and loading states are manually verified | Add focused React/browser test framework |
| TD-03 | No formal design-token file | CSS values can diverge | Consolidate repeated values into custom properties |
| TD-04 | Accessibility not formally audited | Focus/contrast issues may remain | Perform documented manual and automated audit |
| TD-05 | No hosting configuration | Deep links depend on provider setup | Add host-specific config once provider is chosen |
| TD-06 | Remote image references depend on third parties | Reliability and rights are uncertain | Use verified local licensed assets or initials |

Prioritize debt based on actual user impact and deployment risk. Do not add infrastructure solely to make the repository appear larger.

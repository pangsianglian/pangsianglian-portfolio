export const projects = Object.freeze([
  {
    "id": "hr-budgeting-whatsapp-bot",
    "title": "HR Budgeting WhatsApp Bot",
    "category": "Workflow Automation",
    "status": "Active development",
    "visibility": "Private repository",
    "featured": true,
    "summary": "A governed WhatsApp-based budgeting workflow replacing fragmented forms, spreadsheets, emails and manual follow-up with structured capture, verification, approvals and consolidation.",
    "problem": "Budget requests were vulnerable to fragmented inputs, unclear ownership, repeated follow-up and weak auditability across MS Forms, Excel, email and chat.",
    "role": "Solution owner, finance process designer and hands-on application developer.",
    "impact": [
      "Introduces a guided requester → reviewer → HOD → HR Admin workflow.",
      "Creates structured, dashboard-ready budget records with clearer accountability.",
      "Uses verification, role-based access and business-unit scope controls to strengthen governance.",
      "Reached 133 passing automated tests across the evolving application suite."
    ],
    "architecture": [
      "WhatsApp webhook and inbound event dispatch",
      "Command routing and application use cases",
      "OTP, staff verification and role-based access",
      "Budget capture, draft editing and submission lifecycle",
      "Reviewer/HOD approval and HR Admin consolidation",
      "Repository interfaces for SQL, email, WhatsApp and document storage"
    ],
    "controls": [
      "OTP verification",
      "BU-level access scope",
      "Reviewer and approver routing",
      "Submission audit trail",
      "Automated tests and regression coverage",
      "Optional controlled document storage"
    ],
    "stack": [
      "Python",
      "FastAPI architecture",
      "SQL",
      "WhatsApp Cloud API",
      "Microsoft Graph",
      "SMTP",
      "Pytest",
      "Clean Architecture"
    ],
    "next": [
      "Resolve remaining workflow edge cases for new BU/fund combinations.",
      "Complete common-expense edit protection and conditional hiring-reason logic.",
      "Integrate SharePoint document storage and expand operational reporting."
    ],
    "disclosure": "The operational source code remains private because it contains organisational workflow rules, employee-data structures and integration configuration. A redacted walkthrough, architecture review and controlled demonstration can be provided.",
    "image": "assets/images/hr_budgeting_architecture.svg",
    "doc": "docs/case-studies/hr-budgeting-whatsapp-bot.md"
  },
  {
    "id": "cashflow-reconciliation",
    "title": "Cashflow & Bank Reconciliation Automation",
    "category": "Finance Automation",
    "status": "Case study ready",
    "visibility": "Private repository",
    "featured": true,
    "summary": "An end-to-end cashflow intelligence and reconciliation workflow covering Excel ingestion, SQL curation, Python ETL, transaction auto-remark, Power BI visibility and risk alerts.",
    "problem": "Finance teams needed to consolidate inconsistent bank and payment data, apply manual remarks, monitor balances and surface exceptions through labour-intensive spreadsheet routines.",
    "role": "Finance process analyst, data engineer and automation developer.",
    "impact": [
      "Standardised fragmented spreadsheet inputs into controlled SQL staging and curated layers.",
      "Automated transaction remarking while retaining human review for uncertain cases.",
      "Improved operational cash visibility through dashboard-ready data.",
      "Established a reusable foundation for exception handling and low-balance risk alerts."
    ],
    "architecture": [
      "Excel and finance-file ingestion",
      "Validation and SQL staging",
      "Transformation into curated finance tables",
      "Classification and auto-remark services",
      "Human-in-the-loop exception review",
      "Power BI consumption and email alerting"
    ],
    "controls": [
      "Input validation",
      "Run logging",
      "Traceable matching and remarks",
      "Exception review",
      "Separation of staging and curated data",
      "No production credentials in public materials"
    ],
    "stack": [
      "Python",
      "SQL Server",
      "ETL",
      "Power BI",
      "Scikit-learn",
      "Email automation"
    ],
    "next": [
      "Expand historical pattern and seasonality features.",
      "Refine adaptive thresholds and alert prioritisation.",
      "Connect exceptions more tightly to action workflows."
    ],
    "disclosure": "The repository and production data are private due to financial confidentiality. Public materials use synthetic examples and describe architecture, controls and reusable design patterns without exposing accounts or transaction details.",
    "image": "assets/images/cashflow_workflow.png",
    "doc": "docs/case-studies/cashflow-reconciliation.md"
  },
  {
    "id": "preschool-gsii-automation",
    "title": "Preschool GSII Auto-Reconciliation",
    "category": "Reconciliation & Controls",
    "status": "Active development",
    "visibility": "Private repository",
    "featured": true,
    "summary": "A multi-outlet automation connecting SharePoint file intake, password-protected GSII reports, validation, subsidy reconciliation, exception output and audit-ready tracking.",
    "problem": "Monthly reports arrive across outlets and statuses with password protection, completeness risks and manual subsidy/invoice reconciliation requirements.",
    "role": "Process designer, Microsoft Graph integration developer and reconciliation solution architect.",
    "impact": [
      "Designs a controlled intake process for multiple preschool outlets.",
      "Adds download date, downloader trail, passkey checks, file hashing and completeness validation.",
      "Structures Basic and Additional Subsidy reconciliation with adjustment outputs.",
      "Creates a foundation for projected-versus-actual enrolment and outlet reporting."
    ],
    "architecture": [
      "SharePoint input folders by outlet",
      "Microsoft Graph file discovery and download",
      "Password, filename, hash and completeness validation",
      "GSII extraction and data normalisation",
      "Subsidy and invoice reconciliation rules",
      "Exception, adjustment, audit-log and dashboard outputs"
    ],
    "controls": [
      "Dedicated SharePoint folders",
      "File hash and duplicate detection",
      "Passkey verification",
      "Outlet/month completeness checks",
      "Downloader and processing audit trail",
      "Synthetic or redacted public screenshots"
    ],
    "stack": [
      "Python",
      "Microsoft Graph",
      "SharePoint",
      "Excel processing",
      "SQL-ready data model",
      "Power BI-ready outputs"
    ],
    "next": [
      "Complete Graph folder and file-resolution services.",
      "Implement protected-workbook extraction and monthly completeness rules.",
      "Build reconciliation output, exception report and dashboard model."
    ],
    "disclosure": "The implementation remains private because it processes protected operational files and child-related administrative data. Portfolio evidence is limited to redacted workflows, synthetic records, controls and architecture.",
    "image": "assets/images/preschool_gsii_architecture.svg",
    "doc": "docs/case-studies/preschool-gsii-automation.md"
  },
  {
    "id": "flight-no-show-prediction",
    "title": "Flight Passenger No-Show Prediction",
    "category": "Predictive Analytics",
    "status": "Public demonstration",
    "visibility": "Public repository",
    "featured": false,
    "summary": "A Python machine-learning pipeline predicting passenger no-shows and writing model results back to a database for operational use.",
    "problem": "Passenger no-shows create seat spoilage and planning uncertainty in aviation operations.",
    "role": "Data analyst and machine-learning developer.",
    "impact": [
      "Demonstrates feature engineering and classification.",
      "Connects predictive output to a database workflow.",
      "Frames modelling around revenue protection and capacity planning."
    ],
    "architecture": [
      "Database extraction",
      "Feature preparation",
      "Model training and evaluation",
      "Prediction generation",
      "Database write-back"
    ],
    "controls": [
      "Reproducible pipeline",
      "Clear feature boundaries",
      "Evaluation output",
      "Configuration separated from code"
    ],
    "stack": [
      "Python",
      "Jupyter",
      "Scikit-learn",
      "MySQL"
    ],
    "next": [
      "Improve experiment tracking and deployment documentation."
    ],
    "disclosure": "Public educational project. Repository link is available through the GitHub profile.",
    "image": null,
    "doc": null
  },
  {
    "id": "sync-festival-reconciliation",
    "title": "SYNC Festival Reconciliation Automation",
    "category": "Operational Automation",
    "status": "Operational enhancement",
    "visibility": "Private repository",
    "featured": false,
    "summary": "A scheduled Microsoft Graph and SharePoint reconciliation process that links source records, creates missing items and produces observable run logs.",
    "problem": "Manual linking and reconciliation of event-related records created delays and incomplete SharePoint updates.",
    "role": "Automation developer and process troubleshooter.",
    "impact": [
      "Introduced scheduled daily runs.",
      "Added auto-creation logic for missing SharePoint items.",
      "Improved troubleshooting through detailed execution logs."
    ],
    "architecture": [
      "Scheduled task",
      "Graph authentication",
      "Source-file ingestion",
      "SharePoint matching and item creation",
      "Run logging and exception handling"
    ],
    "controls": [
      "Dry-run mode",
      "Feature flags",
      "Detailed logs",
      "Selective field updates"
    ],
    "stack": [
      "Python",
      "Microsoft Graph",
      "SharePoint",
      "Windows Task Scheduler"
    ],
    "next": [
      "Strengthen record-linking diagnostics and scheduler monitoring."
    ],
    "disclosure": "Private operational repository; public description excludes organisational identifiers and production URLs.",
    "image": null,
    "doc": null
  }
].map(project => Object.freeze(project)));

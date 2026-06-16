# Preschool GSII Auto-Reconciliation

**Category:** Reconciliation & Controls
**Status:** Active development
**Repository:** Private repository

## Executive summary

A multi-outlet automation connecting SharePoint file intake, password-protected GSII reports, validation, subsidy reconciliation, exception output and audit-ready tracking.

## Business problem

Monthly reports arrive across outlets and statuses with password protection, completeness risks and manual subsidy/invoice reconciliation requirements.

## My role

Process designer, Microsoft Graph integration developer and reconciliation solution architect.

## Business and delivery value

- Designs a controlled intake process for multiple preschool outlets.
- Adds download date, downloader trail, passkey checks, file hashing and completeness validation.
- Structures Basic and Additional Subsidy reconciliation with adjustment outputs.
- Creates a foundation for projected-versus-actual enrolment and outlet reporting.

## Architecture

1. SharePoint input folders by outlet
2. Microsoft Graph file discovery and download
3. Password, filename, hash and completeness validation
4. GSII extraction and data normalisation
5. Subsidy and invoice reconciliation rules
6. Exception, adjustment, audit-log and dashboard outputs

## Governance and controls

- Dedicated SharePoint folders
- File hash and duplicate detection
- Passkey verification
- Outlet/month completeness checks
- Downloader and processing audit trail
- Synthetic or redacted public screenshots

## Technology

Python, Microsoft Graph, SharePoint, Excel processing, SQL-ready data model, Power BI-ready outputs

## Latest progress / next steps

- Complete Graph folder and file-resolution services.
- Implement protected-workbook extraction and monthly completeness rules.
- Build reconciliation output, exception report and dashboard model.

## Confidentiality

The implementation remains private because it processes protected operational files and child-related administrative data. Portfolio evidence is limited to redacted workflows, synthetic records, controls and architecture.

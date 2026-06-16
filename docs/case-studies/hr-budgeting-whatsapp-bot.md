# HR Budgeting WhatsApp Bot

**Category:** Workflow Automation
**Status:** Active development
**Repository:** Private repository

## Executive summary

A governed WhatsApp-based budgeting workflow replacing fragmented forms, spreadsheets, emails and manual follow-up with structured capture, verification, approvals and consolidation.

## Business problem

Budget requests were vulnerable to fragmented inputs, unclear ownership, repeated follow-up and weak auditability across MS Forms, Excel, email and chat.

## My role

Solution owner, finance process designer and hands-on application developer.

## Business and delivery value

- Introduces a guided requester â†’ reviewer â†’ HOD â†’ HR Admin workflow.
- Creates structured, dashboard-ready budget records with clearer accountability.
- Uses verification, role-based access and business-unit scope controls to strengthen governance.
- Reached 133 passing automated tests across the evolving application suite.

## Architecture

1. WhatsApp webhook and inbound event dispatch
2. Command routing and application use cases
3. OTP, staff verification and role-based access
4. Budget capture, draft editing and submission lifecycle
5. Reviewer/HOD approval and HR Admin consolidation
6. Repository interfaces for SQL, email, WhatsApp and document storage

## Governance and controls

- OTP verification
- BU-level access scope
- Reviewer and approver routing
- Submission audit trail
- Automated tests and regression coverage
- Optional controlled document storage

## Technology

Python, FastAPI architecture, SQL, WhatsApp Cloud API, Microsoft Graph, SMTP, Pytest, Clean Architecture

## Latest progress / next steps

- Resolve remaining workflow edge cases for new BU/fund combinations.
- Complete common-expense edit protection and conditional hiring-reason logic.
- Integrate SharePoint document storage and expand operational reporting.

## Confidentiality

The operational source code remains private because it contains organisational workflow rules, employee-data structures and integration configuration. A redacted walkthrough, architecture review and controlled demonstration can be provided.

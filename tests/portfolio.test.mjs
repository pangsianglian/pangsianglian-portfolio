import test from "node:test";
import assert from "node:assert/strict";
import { projects } from "../assets/js/data/projects.js";
import { ProjectRepository } from "../assets/js/repositories/ProjectRepository.js";
import { PortfolioService } from "../assets/js/services/PortfolioService.js";

const repository = new ProjectRepository(projects);
const service = new PortfolioService(repository);

test("project IDs are unique", () => {
  const ids = projects.map(project => project.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("three flagship projects are featured", () => {
  const featured = service.featuredProjects();
  assert.equal(featured.length, 3);
  assert.deepEqual(featured.map(project => project.id), [
    "hr-budgeting-whatsapp-bot",
    "cashflow-reconciliation",
    "preschool-gsii-automation"
  ]);
});

test("private projects include a disclosure", () => {
  for (const project of projects.filter(item => item.visibility === "Private repository")) {
    assert.ok(project.disclosure.length > 80, project.title);
  }
});

test("category filtering returns matching projects", () => {
  const items = service.projectsByCategory("Finance Automation");
  assert.ok(items.length > 0);
  assert.ok(items.every(project => project.category === "Finance Automation"));
});

test("project detail lookup accepts URL search parameters", () => {
  const project = service.projectFromLocation("?id=preschool-gsii-automation");
  assert.equal(project?.title, "Preschool GSII Auto-Reconciliation");
});

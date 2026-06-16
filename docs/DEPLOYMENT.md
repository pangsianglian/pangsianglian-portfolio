# GitHub Pages Deployment

## First deployment

1. Replace the existing repository contents with this recreated version.
2. Commit and push to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

## Local verification

```bash
npm test
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Suggested commit

```bash
git add .
git commit -m "Rebuild portfolio for finance transformation career path"
git push origin main
```

## Rollback

Create a release or tag before replacement:

```bash
git tag portfolio-before-finance-transformation-rebuild
git push origin portfolio-before-finance-transformation-rebuild
```

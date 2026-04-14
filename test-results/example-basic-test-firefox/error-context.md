# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> basic test
- Location: tests\example.spec.ts:3:1

# Error details

```
TimeoutError: browserType.launch: Timeout 180000ms exceeded.
Call log:
  - <launching> C:\Users\zear1\AppData\Local\ms-playwright\firefox-1511\firefox\firefox.exe -no-remote -headless -profile C:\Users\zear1\AppData\Local\Temp\playwright_firefoxdev_profile-XojLPT -juggler-pipe -silent
  - <launched> pid=14996
  - [pid=14996][err] *** You are running in headless mode.
  - [pid=14996][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt (t=0.294629) [GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt

```
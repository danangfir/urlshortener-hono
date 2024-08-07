import App from './App.svelte';

const target = document.getElementById('svelte-app');
let app: App | undefined;

if (target) {
  app = new App({
    target: target,
  });
} else {
  throw new Error("Target element 'svelte-app' not found");
}

export default app;

<script lang="ts">
  let longUrl = '';
  let shortUrl = '';

  async function shortenUrl() {
    try {
      const response = await fetch('http://localhost:3000/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ long_url: longUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      shortUrl = `http://localhost:3000/${data.short_url}`;
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  }
</script>

<div class="container">
  <h1>URL Shortener</h1>
  <form on:submit|preventDefault={shortenUrl}>
    <label for="longUrl">Enter Long URL:</label>
    <input type="text" id="longUrl" bind:value={longUrl} required>
    <button type="submit">Shorten URL</button>
  </form>

  {#if shortUrl}
    <p>Short URL: <a href={shortUrl} target="_blank">{shortUrl}</a></p>
  {/if}
</div>

<style>
  @import '../global.css';
</style>

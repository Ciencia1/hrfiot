<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="https://hospitalprivado.com.ar/"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
          hospitalprivado.com.ar
          </a>
        </li>
      
      </ul>
      <div class="copyright">
        &copy; {{ year }}, Trabajando juntos </i> by
        
        <a
          href="https://hospitalprivado.com.ar/"
          target="_blank"
          rel="noopener"
          >Hospital Privado</a
        >
        Sistema de monitoreo.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>

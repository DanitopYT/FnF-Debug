<script>
        function showInfo() {
            document.getElementById("infoModal").style.display = "block";
        }
        function closeInfo() {
            document.getElementById("infoModal").style.display = "none";
        }
        
        // Cierra la modal si el usuario hace clic fuera de ella
        window.onclick = function(event) {
          const modal = document.getElementById("infoModal");
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    </script>
</body>
</html>
 <script>
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // 다른 열려있는 아코디언 닫기 (선택 사항)
        document.querySelectorAll('.accordion-content').forEach(item => {
          if (item !== content) {
            item.style.display = 'none';
          }
        });

        // 현재 클릭한 아코디언 토글
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  </script>
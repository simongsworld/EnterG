 <script>
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // �ٸ� �����ִ� ���ڵ�� �ݱ� (���� ����)
        document.querySelectorAll('.accordion-content').forEach(item => {
          if (item !== content) {
            item.style.display = 'none';
          }
        });

        // ���� Ŭ���� ���ڵ�� ���
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  </script>
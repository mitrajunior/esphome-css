// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {
  // Alternar visibilidade do console
  const consoleToggleBtn = document.querySelector('.console-toggle');
  const consoleEl = document.querySelector('.console');

  if (consoleToggleBtn && consoleEl) {
    consoleToggleBtn.addEventListener('click', () => {
      consoleEl.classList.toggle('hidden');
    });
  }

  // Recarregar switches via botão
  const reloadBtns = document.querySelectorAll('.reload-button');
  reloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Faz uma requisição fetch para o ESPHome atualizar os estados
      fetch('/status')
        .then(response => response.json())
        .then(data => {
          console.log('Estados atualizados', data);
          // Aqui você pode atualizar os textos dos botões ou indicadores
          // Exemplo:
          // document.querySelector('#switch1').textContent = data.switch1 ? "ON" : "OFF";
        })
        .catch(err => console.error('Erro ao atualizar switches', err));
    });
  });

  // Efeito de hover para botões (opcional)
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(button => {
    button.addEventListener('mouseenter', () => button.classList.add('hovered'));
    button.addEventListener('mouseleave', () => button.classList.remove('hovered'));
  });
});

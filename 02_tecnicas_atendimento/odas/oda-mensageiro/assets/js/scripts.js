let currentStep = 0;

$(document).ready(function () {
  function handleOptionClick() {
    var isCorrect = $(this).data("correct");
    var feedback = $(this).data("feedback");

    if (isCorrect) {
      $("#chat-messages").append(
        '<div class="message received">' + $(this).text() + "</div>"
      );
      scrollToBottom();
      setTimeout(function() {
        carregarProximaPergunta();
    }, 1000);
    } else {
      showFeedback(feedback);
    }
  }

  function showFeedback(feedback) {
    $(".texto-feed-chat").text(feedback);

    var modalElement = $("#feedback-modal");

    if (modalElement.length > 0) {
      $(".container-whats").addClass("blur-background");

      modalElement.modal("show");
      somModalFeed();

      modalElement.on("hidden.bs.modal", function () {
        $(".container-whats").removeClass("blur-background");
      });
    } else {
      console.error("Modal de feedback não encontrado!");
    }
  }

  function somDeNotificacao() {
    var somNotificacao = document.getElementById("som-notificacao");
    if (somNotificacao) {
      somNotificacao.currentTime = 0;
      somNotificacao.play();
    } else {
      console.error("Som de notificação não encontrado.");
    }
  }

  function carregarProximaPergunta() {
    if (currentStep < steps.length) {
      var step = steps[currentStep];
      $("#chat-messages").append(
        '<div class="message sent cliente">' + step.message + "</div>"
      );
      scrollToBottom();
      somDeNotificacao();
      $("#chat-input").empty();
      step.options.forEach(function (option) {
        var buttonContainer = $(
          '<div class="btn-enviar-col"><button class="btn btn-opcao-chat">' +
            option.text +
            '<span><img src="assets/img/botao_enviar.png" class="img-fluid" alt="icone botão enviar"></span></button></div>'
        );
        buttonContainer.find("button").data("correct", option.correct);
        buttonContainer.find("button").data("feedback", option.feedback || "");
        buttonContainer.find("button").click(handleOptionClick);
        $("#chat-input").append(buttonContainer);
      });

      currentStep++;
    } else {
      $("#chat-input").empty();
      $("#chat-messages").append('<div class="message received">Tenha uma ótima tarde!</div>');
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    $("#chat-messages").animate(
      { scrollTop: $("#chat-messages").prop("scrollHeight") },
      500
    );
  }

  function iniciarObjeto() {
    $(".btn-iniciar").on("click", function () {
      $(".elemento-inicial").addClass("hidden");
      $("#coluna-whats").removeClass("hidden");
      $(".div1-historico").addClass("disabled");
    });

    $(".div1-historico").on("click", function () {
      $(".elemento-inicial").addClass("hidden");
      $("#coluna-whats").removeClass("hidden");
      $(".div1-historico").addClass("disabled");
    });
  }

  function somModalFeed() {
    var somModal = document.getElementById("som-modal-feedback");
    if (somModal) {
      somModal.currentTime = 0;
      somModal.play();
    } else {
      console.error("Som de feedback não encontrado.");
    }
  }

  criarBodyObjetoHtml();
  controleCarrossel();
  iniciarObjeto();
  carregarProximaPergunta();
});

function criarBodyObjetoHtml() {
  var html = `
  <div class="body-obj-whats">
            <div class="centralizar">
                <div class="row container-whats">
                    <div class="col p-0 historico-conversas">
                        <div class="chat-history">
                            <h1 class="title-historico">Mensageiro </h1><span class="icone-cam"><img src="assets/img/icon_cam.png" alt=""></span> <h1>:</h1>
                        </div>
                        <div class="bg-historico">
                            <div class="search-container">
                                <input type="text" id="search-input" class="search-input" placeholder="Pesquisar...">
                            </div>
                            <button class="div1-historico">
                                <img src="assets/img/avatar1.png" class="img-fluid h-img-avatar" alt="">
                                <div class="h-content">
                                    <div class="h-header">
                                        <h4 class="h-nome">Valéria cliente</h4>
                                        <h5 class="h-horario">16:25</h5>
                                    </div>
                                    <p class="h-mensagem h-destaque">Oi! Queria conversar sobre a consultoria! Você pode falar agora?</p>
                                </div>
                            </button>
                            <div class="div2-historico">
                                <img src="assets/img/avatar2.png" class="img-fluid h-img-avatar" alt="">
                                <div class="h-content">
                                    <div class="h-header">
                                        <h4 class="h-nome">Grupo da Família</h4>
                                        <h5 class="h-horario">14:58</h5>
                                    </div>
                                    <p class="h-mensagem">Tia Gertrudes: Uma boa tarde...</p>
                                </div>
                            </div>
                            <div class="div3-historico">
                                <img src="assets/img/avatar3.png" class="img-fluid h-img-avatar" alt="">
                                <div class="h-content">
                                    <div class="h-header">
                                        <h4 class="h-nome">Vó</h4>
                                        <h5 class="h-horario">11:24</h5>
                                    </div>
                                    <span class="h-mensagem row"><img src="assets/img/visto.png" class="img-fluid col-3 img-div3-historico" alt=""><p class="col-9">eu vou sim!!</p></span>
                                </div>
                            </div>
                            <div class="div4-historico">
                                <img src="assets/img/avatar4.png" class="img-fluid h-img-avatar" alt="">
                                <div class="h-content">
                                    <div class="h-header">
                                        <h4 class="h-nome">Tio Jorge</h4>
                                        <h5 class="h-horario">ontem</h5>
                                    </div>
                                    <span class="h-mensagem row"><img src="assets/img/img-icone.png" class="img-fluid col-3 img-div4-historico" alt=""><p class="col-9">Repasse ou azar!</p></span>
                                </div>
                            </div>
                            <div class="div5-historico">
                                <img src="assets/img/avatar5.png" class="img-fluid h-img-avatar" alt="">
                                <div class="h-content">
                                    <div class="h-header">
                                        <h4 class="h-nome">Amigo da escola</h4>
                                        <h5 class="h-horario">ontem</h5>
                                    </div>
                                    <p class="h-mensagem">beleza, combinado!</p>
                                </div>
                            </div>
                            <div class="div6-historico">
                                <img src="assets/img/avatar6.png" class="img-fluid h-img-avatar" alt="">
                                <div class="h-content">
                                    <div class="h-header">
                                        <h4 class="h-nome">Formatura</h4>
                                        <h5 class="h-horario">ontem</h5>
                                    </div>
                                    <p class="h-mensagem">Rê: Finalmente xD...</p>
                                </div>
                            </div>
                        </div>
                       <!--  <div class="footer-historico"><img src="assets/img/footerhistorico.png" class="w-100" alt=""></div> -->
                    </div>

                    <!-- Coluna tela inicial -->
                    <div class="col p-0 elemento-inicial" id="coluna-inicial">
                        <div class="chat-container col-iniciar">
                            <button class="btn btn-iniciar w-100 h-100">Clique na conversa para iniciar</button>
                        </div>
                    </div>

                    <!-- Coluna de chat -->
                    <div class="col p-0 hidden" id="coluna-whats">
                        <div class="chat-container">
                            <div class="chat-header">
                                <img src="assets/img/avatar1.png" alt="Contato" class="chat-avatar">
                                <span class="chat-title figtree">Valéria cliente</span>
                            </div>
                            <div class="chat-messages" id="chat-messages"></div>
                            <div class="chat-input" id="chat-input"></div>
                        </div>
                        <audio id="som-clique" src="assets/audio/clique.mp3"></audio>
                        <audio id="som-notificacao" src="assets/audio/som-notificacao.mp3"></audio>
                        <audio id="som-modal-feedback" src="assets/audio/som-error.mp3"></audio>
                    </div>
                </div>

                <!-- Modal com o Carrossel -->
                <div class="modal fade modal-custom-backdrop modal-custom-width" id="carouselModal" tabindex="-1" aria-labelledby="carouselModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div id="carouselExample" class="carousel slide custom-carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="assets/img/op1.png" class="d-block w-100" alt="Opção 1">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="assets/img/op2.png" class="d-block w-100" alt="Opção 2">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="assets/img/op3.png" class="d-block w-100" alt="Opção 3">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-target="#carouselExample" data-slide="prev">
                                        <img src="assets/img/arrow_back.png" alt="Previous" class="carousel-arrow">
                                        <span class="sr-only">próximo</span>
                                    </button>

                                    <button class="carousel-control-next" type="button" data-target="#carouselExample" data-slide="next">
                                        <img src="assets/img/arrow_forward.png" alt="Next" class="carousel-arrow">
                                        <span class="sr-only">voltar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal de feedback -->
                <div class="modal fade feedback-modal" id="feedback-modal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered feedback-modal">
                        <div class="modal-content body-modal-chat">
                            <div class="modal-body">
                                <div class="icone-modal">
                                    <img src="assets/img/icon-recomecar.png" class="img-fluid" alt="icone recomeçar">
                                </div>
                                <p class="texto-feed-chat"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        `;

  $("#oda-mensageiro").append(html);
}

function controleCarrossel() {
  $(".carousel-control-prev").click(function () {
    $("#carouselExample").carousel("prev");
  });

  $(".carousel-control-next").click(function () {
    $("#carouselExample").carousel("next");
  });
}

    const maintenanceTasks = [
      { title: "Проверка работоспособности системы", description: "Ежедневно: открыть систему, проверить работоспособность, создать тестовый заказ, при неполадках обратиться к специалисту." },
      { title: "Резервное копирование данных", description: "Ежедневно: создать резервную копию базы данных, проверить успешность создания, при неполадках обратиться к специалисту." },
      { title: "Обновление программного обеспечения", description: "Еженедельно: проверить наличие обновлений, установить их при наличии, проверить работу системы после обновления." },
      { title: "Тестирование системы на наличие уязвимостей", description: "Еженедельно: связаться с техническим специалистом, предоставить доступ к системе, получить отчет и устранить обнаруженные уязвимости." }
    ];

    const information = [
      { title: "Общие сведения о системе", description: "Система автоматизации учета заказов предназначена для управления всеми этапами подключения бойлеров и фильтров для воды: от приема заявки до завершения установки, включая учет оборудования, расчет стоимости и формирование отчетов." },
      { title: "Типы оборудования", description: "В системе учитываются различные типы бойлеров (проточные, накопительные) и фильтров для воды (магистральные, под мойку, системы обратного осмоса), их модели, характеристики и особенности установки." },
      { title: "Процесс учета заказов", description: "Процесс включает прием заявки, выбор оборудования, расчет стоимости, назначение специалиста, контроль выполнения установки и оформление закрывающих документов." },
      { title: "Роли и права доступа", description: "В системе предусмотрены роли: менеджер (прием заказов, расчет стоимости), техник (выполнение установки), администратор (полный доступ ко всем функциям)." },
      { title: "Интеграция с другими системами", description: "Система интегрируется с CRM для управления клиентами, бухгалтерскими программами для финансового учета и складскими системами для контроля остатков оборудования." },
      { title: "Рекомендации по работе с системой", description: "Используйте горячие клавиши для быстрого перехода между разделами, шаблоны для типовых заказов, регулярно проверяйте статусы заказов и соблюдайте процедуры резервного копирования." },
      { title: "Справочные таблицы", description: "В системе доступны справочники кодов ошибок, статусов заказов, моделей оборудования и других параметров, необходимых для корректного оформления заказов." }
    ];

    const questions = {
      dataLoss: [
        { id: "q1", question: "Есть ли резервная копия данных?", answers: [
            { text: "Да", next: "q3" },
            { text: "Нет", next: "q2" }
        ]},
        { id: "q2", question: "Есть возможность восстановить данные вручную?", answers: [
            { text: "Да", next: "q4" },
            { text: "Нет", result: "Обратитесь к специалисту: ivan@prnwatch.com" }
        ]},
        { id: "q3", question: "Помогло ли восстановление из резервной копии?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Обратитесь к специалисту: ivan@prnwatch.com" }
        ]},
        { id: "q4", question: "Помогло ли ручное восстановление?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Обратитесь к специалисту: ivan@prnwatch.com" }
        ]}
      ],
      calculationErrors: [
        { id: "q1", question: "Корректно ли настроены тарифы и скидки?", answers: [
          { text: "Да", next: "q2" },
          { text: "Нет", next: "q3" }
        ]},
        { id: "q2", question: "Перезапуск системы решил проблему?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Проверьте алгоритм расчета на наличие ошибок или обратитесь к специалисту: ivan@prnwatch.com" }
        ]},
        { id: "q3", question: "Помогла ли корректировка тарифов и скидок?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Проверьте алгоритм расчета на наличие ошибок или обратитесь к специалисту: ivan@prnwatch.com" }
        ]}
      ],
      processingDelay: [
        { id: "q1", question: "Система перегружена?", answers: [
            { text: "Да", next: "q3" },
            { text: "Нет", next: "q2" }
        ]},
        { id: "q2", question: "Перезапуск системы решил проблему?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Проверьте логику обработки заказов на наличие ошибок или обратитесь к специалисту: ivan@prnwatch.com" }
        ]},
        { id: "q3", question: "Помогла ли оптимизация нагрузки?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Проверьте логику обработки заказов на наличие ошибок или обратитесь к специалисту: ivan@prnwatch.com" }
        ]}
      ],
      integrationErrors: [
        { id: "q1", question: "Доступна ли внешняя система?", answers: [
          { text: "Да", next: "q2" },
          { text: "Нет", next: "q4" }
        ]},
        { id: "q2", question: "Корректны ли API ключи и настройки доступа?", answers: [
          { text: "Да", next: "q3" },  
          { text: "Нет", next: "q5" }
        ]},
        { id: "q3", question: "Соответствует ли формат данных требованиям внешней системы?", answers: [
            { text: "Да", result: "Проверьте наличие ошибок в коде интеграции или обратитесь к специалисту: ivan@prnwatch.com" },
            { text: "Нет", next: "q6" }
        ]},
        { id: "q4", question: "Восстановилась ли работа внешней системы?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Ожидайте восстановления работы внешней системы и завершите диагностику позже." }
        ]},
        { id: "q5", question: "Помогло ли обновление API ключей и настроек доступа?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Проверьте наличие ошибок в коде интеграции или обратитесь к специалисту: ivan@prnwatch.com" }
        ]},
        { id: "q6", question: "Помогла ли корректировка формата данных?", answers: [
            { text: "Да", result: "Диагностика завершена." },
            { text: "Нет", result: "Проверьте наличие ошибок в коде интеграции или обратитесь к специалисту: ivan@prnwatch.com" }
        ]}
      ]
    };

    let activeIssue = null;

    // Функционал кнопки прокрутки наверх
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Показать кнопку, когда пользователь прокрутил страницу вниз
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('active');
      } else {
        scrollToTopButton.classList.remove('active');
      }
    });

    // Прокрутка наверх при клике на кнопку
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    function closeAllDiagnosticAreas() {
      document.querySelectorAll('.diagnostic-area').forEach(area => {
        area.style.display = 'none';
      });
    }

    function resetDiagnosticArea(issueId) {
      // Сбросить результаты и показать первый вопрос
      document.getElementById(`result-${issueId}`).style.display = 'none';
      document.getElementById(`question-${issueId}`).parentElement.style.display = 'block';
      
      // Показать первый вопрос для данной неисправности
      const firstQuestion = questions[issueId][0];
      updateQuestionForIssue(issueId, firstQuestion);
    }

    function handleAnswer(issueId, answer) {
      if (answer.result) {
        document.getElementById(`question-${issueId}`).parentElement.style.display = 'none';
        document.getElementById(`result-${issueId}`).style.display = 'block';
        document.getElementById(`diagnosis-result-${issueId}`).textContent = answer.result;
      } else {
        const nextStep = questions[issueId]?.find(q => q.id === answer.next);
        if (nextStep) {
          updateQuestionForIssue(issueId, nextStep);
        }
      }
    }

    function updateQuestionForIssue(issueId, question) {
      document.getElementById(`question-${issueId}`).textContent = question.question;
      const answersDiv = document.getElementById(`answers-${issueId}`);
      answersDiv.innerHTML = '';
      question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = answer.text;
        button.onclick = () => handleAnswer(issueId, answer);
        answersDiv.appendChild(button);
      });
    }

    function selectIssue(issueId) {
      if (activeIssue === issueId) {
        // Если уже открыт, просто закрываем
        document.getElementById(`diagnostic-${issueId}`).style.display = 'none';
        activeIssue = null;
        return;
      }
      
      // Закрыть все открытые области диагностики
      closeAllDiagnosticAreas();
      
      // Показать область диагностики для выбранной неисправности
      const diagnosticArea = document.getElementById(`diagnostic-${issueId}`);
      diagnosticArea.style.display = 'block';
      
      // Сбросить диалог к начальному состоянию
      resetDiagnosticArea(issueId);
      
      activeIssue = issueId;
    }

    function renderInformation() {
      const informationBlock = document.getElementById('information-block');
      information.forEach(info => {
        const details = document.createElement('details');
        details.classList.add('details');
        const summary = document.createElement('summary');
        summary.classList.add('summary');
        summary.textContent = info.title;
        details.appendChild(summary);
        if (Array.isArray(info.description)) {
          const div = document.createElement('div');
          info.description.forEach(item => {
            const p = document.createElement('p');
            p.innerHTML = item;
            div.appendChild(p);
          });
          details.appendChild(div);
        } else {
          const description = document.createElement('p');
          description.innerHTML = info.description;
          details.appendChild(description);
        }
        informationBlock.appendChild(details);
      });
    }

    function render() {
      const maintenanceTasksDiv = document.getElementById('maintenance-tasks');
      maintenanceTasks.forEach(task => {
        const details = document.createElement('details');
        details.classList.add('details');
        const summary = document.createElement('summary');
        summary.classList.add('summary');
        summary.textContent = task.title;
        details.appendChild(summary);
        const description = document.createElement('p');
        description.textContent = task.description;
        details.appendChild(description);
        maintenanceTasksDiv.appendChild(details);
      });
    }

    render();
    renderInformation();
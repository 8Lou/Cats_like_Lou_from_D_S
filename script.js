//DB
const starWarsHeroes = [
  {
    id: 1,
    image:
      'https://i.pinimg.com/736x/29/64/1f/29641fd9c838f48df7ad07bcdd85514a--shocked-cat-very-funny.jpg',
    name: 'Ластик',
    age: 1,
    rate: 10,
    description:
      'Информационная цивилизация — это мы, у нас вместо чувств — чипы и файлы. Не жизнь, а информация о жизни. Всё это скоро с грохотом навернется.',
    favorite: false,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/29/11/58/291158083dcc4c29b3d678bac55b5930.jpg',
    name: 'Айтихон',
    age: 2,
    rate: 7,
    description: 'А ведь когда-то, когда не было соцсетей, только в семье знали, что ты дурачок.',
    favorite: true,
  },
  {
    id: 3,
    image:
      'https://i.pinimg.com/736x/e1/0b/40/e10b408f3fa2c6b08d801b704a4729e1--timeline-images-cute-cats.jpg',
    name: 'Хрюндель',
    age: 1,
    rate: 8,
    description: 'Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.',
    favorite: false,
  },
  {
    id: 4,
    image:
      'https://i.pinimg.com/736x/e7/8d/26/e78d26024c6938eb7b7fb8bb24b601d8--cat-eyes-animal-pictures.jpg',
    name: 'Маська',
    age: 4,
    rate: 10,
    description:
      'Но в нас горит еще желанье, к нему уходят поезда, и мчится бабочка сознанья из ниоткуда в никуда.',
    favorite: false,
  },
  {
    id: 5,
    image:
      'https://i.pinimg.com/736x/37/33/cd/3733cd0d5109c0f5b22f2299e459e907--kittens-meowing-funny-kittens.jpg',
    name: 'Шредингер',
    age: 2,
    rate: 9,
    description:
      'Мы видим картинки, слышим мнения, принимаем в себя чужие мысли, которые тут же становятся нашими.',
    favorite: true,
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/originals/c0/96/41/c09641cd24454a30709f30f717e01393.jpg',
    name: 'Лохматый',
    age: 3,
    rate: 9,
    description:
      'В них больше не осталось ни слов Всевышнего, ни даже понятия о нём. Брызги говна из мирового вентилятора становятся твоей управляющей программой — и начинают определять твои поступки. А потом тебя за это милуют или казнят.',
    favorite: true,
  },
  {
    id: 7,
    image: 'https://i.pinimg.com/originals/a4/14/8f/a4148f153c447fd0fcf7be8c1439f2f1.jpg',
    name: 'Умчёный',
    age: 1,
    rate: 3,
    description:
      'Ты рождаешься чистой флешкой — и на тебя в случайном порядке записываются фрагменты культурного кода, прилетающие из информационного пространства.',
    favorite: false,
  },
  {
    id: 8,
    image: 'https://i.pinimg.com/originals/45/d5/4c/45d54ce22bc8b357aa2fe68ec84c6685.png',
    name: 'Матроскин',
    age: 4,
    rate: 7,
    description:
      'Мы почему-то думаем, что «жизнь» должна опираться на органику, на разных червей и обезьян, ползающих по поверхности громадных каменных шаров. И других вариантов мы просто не видим. До такой степени, что у нашего Бога есть свойственный приматам волосяной покров – борода, за которую его то и дело хватают отважные человеческие мыслители.',
    favorite: true,
  },
  {
    id: 9,
    image: 'https://a.d-cd.net/ptAAAgNUCuA-960.jpg',
    name: 'Сапагав',
    age: 2,
    rate: 6,
    description:
      'Но «жизнь» – это просто переживание ограничений и обязательств, накладываемых материей на сознание. Сцепление одного с другим на некоторое время. И происходить это сцепление может любым способом, какого только пожелает сознание, выдумавшее эту самую материю для своего развлечения.',
    favorite: false,
  },
  {
    id: 10,
    image: 'https://i.pinimg.com/originals/4b/cd/d0/4bcdd082f4a156a731cac945a7af2bfb.png',
    name: 'Мотылёк',
    age: 4,
    rate: 5,
    description:
      'Но «жизнь» – это просто переживание ограничений и обязательств, накладываемых материей на сознание. Сцепление одного с другим на некоторое время. И происходить это сцепление может любым способом, какого только пожелает сознание, выдумавшее эту самую материю для своего развлечения.',
    favorite: false,
  },
  {
    id: 11,
    image:
      'https://cdn.fishki.net/upload/post/2019/09/03/3074830/tn/b2a9d64229911d1070e34745a576b2fc.jpg',
    name: 'Шрэк',
    age: 2,
    rate: 2,
    description:
      '– Двоемыслие – это когда ты одновременно придерживаешься двух противоположных взглядов. Как бы веришь во взаимоисключающие понятия и силой воли заставляешь себя с этим жить. Типа «плюс - это минус» или «свобода - это рабство». А небинарное мышление – это когда тебе даже в голову не приходит, что в происходящем есть противоречие. Двоемыслить больше не надо.',
    favorite: true,
  },
];

const MY_LOGIN = '8Lou/';
const config = {
  baseURL: 'https://cats.petiteweb.dev/api/single/' + MY_LOGIN,
};
//ОБЕРТКА КОНТЕНТА
const bodyWrapper = document.getElementById('body_wrapper');

//API
class Api {
  constructor(config) {
    this.baseURL = config.baseURL;
  }
  getAllHeroes = async () => {
    try {
      const res = await fetch(this.baseURL + 'show');
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  //НЕ ИСПОЛЬЗУЕТСЯ
  getAllIDHeroes = async () => {
    try {
      const res = await fetch(this.baseURL + 'ids');
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  //НЕ ИСПОЛЬЗУЕТСЯ
  getHeroForId = async (id) => {
    try {
      const res = await fetch(this.baseURL + 'show/' + id);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  deleteHero = async (id) => {
    try {
      const res = await fetch(this.baseURL + 'delete/' + id, {
        method: 'DELETE',
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  addHero = async (hero) => {
    try {
      const res = await fetch(this.baseURL + 'add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  changeHero = async (hero, id) => {
    if (id === undefined) return;
    try {
      const res = await fetch(this.baseURL + 'update/' + id.toString(), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
}
const api = new Api(config);
//МАССИВ КОТОВ
let renderHero = null;
//MAIN ГДЕ ОТОБРАЖАЮТСЯ КОТЫ
const main = document.querySelector('.main');

//ФУНКЦИЯ РЕРЕНДЕРА КОТОВ И ДОБАВЛЕНИЯ ИХ В ХРАНИЛИЩЕ
const rerender = (heroes) => {
  main.innerHTML = '';
  const totalRenderHeroAsString = heroes.reduce(
    (total, current) => total + createHero(current),
    '',
  );
  main.innerHTML = totalRenderHeroAsString;
  localStorage.setItem('8Lou', JSON.stringify([...heroes]));
};

//ПРИ ПЕРВОМ РЕНДЕРЕ ПОЛУЧЕНИЕ КОТОВ ИЗ ХРАНИЛИЩЕ ЕСЛИ ОНИ ТАМ ЕСТЬ
renderHero = JSON.parse(localStorage.getItem('8Lou'));
if (renderHero === null) {
  api.getAllHeroes().then((res) => {
    renderHero = [...res];
    rerender([...renderHero]);
  });
} else rerender([...renderHero]);

//КНОПКИ В ХЕДЕРЕ
const openAddFormBtn = document.getElementById('open_form');
const favoriteHeroes = document.getElementById('favorite_btn');
const rateBtn = document.getElementById('rate_btn');
const powerBtn = document.getElementById('power_btn');
const alphabetBtn = document.getElementById('alphabet_btn');
const findHeroInput = document.getElementById('search_hero_input');
const getAllHeroes = document.getElementById('all_heroes');
//ДОБАВЛЕНИЕ ОБРАБОТЧИКОВ НА КНОПКИ В ХЕДЕРЕ
//открыть форму
openAddFormBtn.addEventListener('click', () => openNewForm('add'));
//избранные коты
favoriteHeroes.addEventListener('click', () => {
  renderHero = renderHero.filter((hero) => hero.favorite);
  rerender([...renderHero]);
});
//все коты
getAllHeroes.addEventListener('click', () => {
  api.getAllHeroes().then((res) => {
    renderHero = [...res];
    rerender([...renderHero]);
  });
});
//сортировка по рейтингу
rateBtn.addEventListener('click', () => {
  renderHero.sort((a, b) => b.rate - a.rate);
  rerender([...renderHero]);
});
//сортировка по алфавиту
alphabetBtn.addEventListener('click', () => {
  renderHero.sort((a, b) => a.name.localeCompare(b.name));
  rerender([...renderHero]);
});
//сортировка по мудрости
powerBtn.addEventListener('click', () => {
  renderHero.sort((a, b) => b.age - a.age);
  rerender([...renderHero]);
});
//debounce для инпута
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
const useDebounce = debounce((event) => {
  const heroes = renderHero.filter((hero) =>
    hero.name.toLowerCase().includes(event.target.value.toLowerCase()),
  );
  rerender([...heroes]);
}, 500);
//поиск в инпуте
findHeroInput.addEventListener('input', useDebounce);
//НАСТРОЙКА КНОПКИ СОРТИРОВКИ КОТОВ
const sortButton = document.getElementById('sort_button');
const sortOptions = document.getElementById('sort_options');
const sortBtnInsideOptions = document.querySelectorAll('.nav_btn_inside_select');
sortButton.addEventListener('click', () => {
  sortOptions.classList.toggle('show');
});
document.addEventListener('click', (event) => {
  if (!sortOptions.contains(event.target) && event.target != sortButton) {
    sortOptions.classList.remove('show');
  }
});
sortBtnInsideOptions.forEach((el) =>
  el.addEventListener('click', () => {
    sortOptions.classList.toggle('show');
    sortButton.innerText = el.innerText + ' ▼';
  }),
);

//УДАЛЕНИЕ КОТА
function deleteHero(id) {
  api.deleteHero(id).then((res) => {
    if (res?.message === `Кот c id «${id}» успешно удален`) {
      renderHero = renderHero.filter((el) => el.id !== id);
      rerender([...renderHero]);
    } else {
      alert('Ой, попробуйте позже.');
    }
  });
}
//ТОГЛ ЛЮБИМОГО КОТА
function toggleFavorite(idx) {
  const hero = renderHero.find((el) => el.id === idx);
  hero.favorite = !hero.favorite;
  api.changeHero(hero, idx).then((res) => {
    if (res?.message === 'Данные о коте успешно изменены') {
      renderHero = renderHero.map((el) => (el.id === idx ? hero : el));
      rerender([...renderHero]);
    } else {
      alert('Ой, попробуйте позже.');
    }
  });
}

//ОТКРЫТИЕ МОДАЛЬНОГО ОКНА С ОПИСАНИЕМ

function toggleModal(id) {
  const hero = renderHero.find((hero) => hero.id === id);
  const modal = ` <div id="modal_container">
<div id="modal_content">
<span id="close_modal">&times;</span>
<div class="modal_description">
<p class="field_inside_modal">Имя кота:<br/>  ${hero.name}</p>
<p class="field_inside_modal">Степень мудрости:<br/>  ${hero.age}</p>
<p class="field_description">О чем расскажет котик:<br/> ${hero.description}</p>
</div>
<img src="${hero.image || '/assets/default.png'}" alt="" class="img_modal" />
</div>
</div>`;
  //МОНТИРОВАНИЕ МОДАЛЬНОГО И РАЗМОНИТОРИВАНИЕ ОКНА
  bodyWrapper.insertAdjacentHTML('beforebegin', modal);
  const modalContainer = document.getElementById('modal_container');
  const closeModalButton = document.getElementById('close_modal');
  closeModalButton.addEventListener('click', () => {
    modalContainer.remove();
  });
  document.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.remove();
    }
  });
}

//СОЗДАНИЕ КОТА
function createHero(obj) {
  const sortByRate = (num) => {
    if (num > 7) return 'rating_green';
    else if (num > 5) return 'rating_orange';
    else return 'rating_red';
  };
  return `        <div class="hero">
      <div class="background_img" style="background-image: url('${
        obj.image || 'assets/default.png'
      }')"></div>
      <div class="rating ${sortByRate(obj.rate)}">${obj.rate}</div>
      <i onclick="toggleFavorite(${obj.id})" class="fa-solid fa-duotone fa-star ${
    obj.favorite ? 'favorite_hero' : 'not_favorite_hero'
  }"></i>
      <div class="hero_options">
        <div class="create_hero_fields">          
            <span class="hero_field_text">${obj.name}</span>
            <span class="hero_field_text">${obj.age}</span>
          </p>
        </div>
        <div class="hero_btn_group">
          <button class="hero_btn" onclick="toggleModal(${obj.id})" >Подробнее</button>
          <i class="fa-solid fa-pen" onclick="openNewForm('change',${
            obj.id
          })" id="open-updateForm"></i>
          <i class="fa-regular fa-trash-can" onclick="deleteHero(${obj.id})"></i>
        </div>
      </div>
    </div>`;
}
//СОЗДАНИЕ ФОРМЫ
function fromCreator(type, idx = null) {
  const hero = renderHero.find((el) => el.id === idx);
  return `
  <div id="form_container">
  <form id="form">
    <div class="form_field_wrapper">
      <label for="name_input">Имя котика</label>
      <input
      value="${idx ? hero.name : ''}"
        type="text"
        placeholder="Введите имя котика"
        required
        id="name_input"
        name="name" />
    </div>
    <div class="form_field_wrapper">
      <label for="rate_input">Рейтинг котика </label>
      <span id="rate_input_value">1</span>
      <input
      value="${idx ? hero.rate : ''}"
        type="range"
        placeholder="Укажите рейтинг"
        required
        min="1"
        max="10"
        id="rate_input"
        name="rate" />
    </div>
    <div class="form_field_wrapper">
      <label for="power_input">Степень мудрости </label>
      <span id="power_input_value">1</span>
      <input
      value="${idx ? hero.age : ''}"
        required
        type="range"
        placeholder="Укажите степень мудрости"
        min="1"
        max="100"
        value="1"
        id="power_input"
        name="age" />
    </div>
    <div class="form_field_wrapper">
      <label for="description_input">О чем расскажет котик</label>
      <input
        type="text"
      value="${idx ? hero.description : ''}"

        placeholder="О чем расскажет котик"
        id="description_input"
        name="description" />
    </div>
    <div class="form_field_wrapper">
      <label for="url_input">Ссылка на изображение</label>
      <input type="text" placeholder="Ссылка на изображение" id="url_input" name="image" value="${
        idx ? hero.image : ''
      }"/>
    </div>
    <div class="form_field_wrapper">
      <label for="favorite_input">Добавить в избранное</label>
      <input type="checkbox" id="favorite_input" name="favorite" ${
        idx && hero.favorite ? 'checked' : ''
      }/>
    </div>
    <div class="form_btn_group">
    ${
      type === 'add'
        ? '<button type="submit" class="submit_btn" id="random_btn">Случайный кот</button>'
        : ''
    }
      <button type="submit" class="submit_btn">${type === 'add' ? 'Создать' : 'Изменить'}</button>
      <button type="button" class="submit_btn" id="close_form">Отменить</button>
    </div>
  </form>
  </div>`;
}
//ФУНКЦИЯ ОТКРЫТИЯ ФОРМЫ
function openNewForm(type, idx) {
  const formHTML = fromCreator(type, idx);
  //МОНТИРОВАНИЕ ФОРМЫ
  bodyWrapper.insertAdjacentHTML('beforebegin', formHTML);
  //НАСТРОЙКА ИНПУТА RAGE
  const inputPower = document.getElementById('power_input');
  const inputPowerValue = document.getElementById('power_input_value');
  inputPowerValue.innerHTML = inputPower.value;
  inputPower.addEventListener('input', function () {
    inputPowerValue.innerHTML = this.value;
  });
  const inputRate = document.getElementById('rate_input');
  const inputRateValue = document.getElementById('rate_input_value');
  inputRateValue.innerHTML = inputRate.value;
  inputRate.addEventListener('input', function () {
    inputRateValue.innerHTML = this.value;
  });
  //ЗАКРЫТИЕ И ОБРАБООТКА ФОРМЫ
  const closeForm = document.getElementById('close_form');
  const form = document.getElementById('form_container');
  closeForm.addEventListener('click', () => form.remove());
  form.addEventListener('submit', (event) => submitHandler(event, type, idx, form));
  //РАНДОМНЫЙ КОТ
  const fetchRandomHeroBtn = document.getElementById('random_btn');
  fetchRandomHeroBtn?.addEventListener('click', () => randomFetchHero(form));
}

//УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ОБРАБОТКИ ФОРМЫ В ЗАВИСИМОСТИ ОТ ТИПА ФОРМЫ
function submitHandler(event, type, idx, form) {
  let apiHandler = () => {};
  switch (type) {
    case 'add': {
      apiHandler = api.addHero;
      break;
    }
    case 'change': {
      apiHandler = api.changeHero;
      break;
    }
  }
  event.preventDefault();
  //ДАННЫЕ ИЗ ФОРМЫ
  const formData = new FormData(event.target);
  const body = Object.fromEntries(formData.entries());
  body.favorite ? (body.favorite = true) : (body.favorite = false);
  idx ? (body.id = idx) : (body.id = Date.now());
  body.age = Number(body.age);
  body.rate = Number(body.rate);
  //ЗАПРОС НА СЕРВЕР
  apiHandler(body, idx).then((res) => {
    if (res?.message.includes('успешно')) {
      if (type === 'add') {
        renderHero = [...renderHero, body];
        rerender([...renderHero]);
      } else {
        renderHero = renderHero.map((el) => (el.id === idx ? body : el));
        rerender([...renderHero]);
      }
    } else {
      alert('Ой, попробуйте позже.');
    }
    form.remove();
  });
}
//ПОЛУЧЕНИЕ И ОТПРАВКА РАНДОМНОГО КОТА ИЗ DB
function randomFetchHero(form) {
  const body = { ...starWarsHeroes[Math.floor(Math.random() * 21)] };
  body.id = Date.now();
  api.addHero(body).then((res) => {
    if (res?.message.includes('успешно')) {
      renderHero = [...renderHero, body];
      rerender([...renderHero]);
    } else {
      alert('Что-то сломалось');
    }
    form.remove();
  });
}

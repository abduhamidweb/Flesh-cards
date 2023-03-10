const cardsContainer = document.querySelector('#cards-container')
const cardsContainer2 = document.querySelector('#cards-container2')
const array = [
  {
    ID: 1,
    image: 'ZiZi',
    number: 00,
  },
  {
    ID: 2,
    image: 'ZayTun',
    number: 01,
  },
  {
    ID: 3,
    image: 'ZaNjir',
    number: 02,
  },
  {
    ID: 1,
    image: 'ZoMbi',
    number: 03,
  },
  {
    ID: 2,
    image: 'ZaR',
    number: 04,
  },
  {
    ID: 3,
    image: 'ZuLuk',
    number: 05,
  },
  {
    ID: 1,
    image: 'ZeBra',
    number: 06,
  },
  {
    ID: 2,
    image: 'ZiraK',
    number: 07,
  },
  {
    ID: 3,
    image: 'ZeFir',
    number: 08,
  },
  {
    ID: 1,
    image: 'ZajiGalka',
    number: 09,
  },
  {
    ID: 2,
    image: 'TaroZi',
    number: 10,
  },
  {
    ID: 3,
    image: `To'Ti`,
    number: 11,
  },
  {
    ID: 1,
    image: 'TaNka',
    number: 12,
  },
  {
    ID: 2,
    image: 'ToMat',
    number: 13,
  },
  {
    ID: 3,
    image: 'TRaktor',
    number: 14,
  },
  {
    ID: 1,
    image: 'TiLla',
    number: 15,
  },
  {
    ID: 2,
    image: 'TaBuretka',
    number: 16,
  },
  {
    ID: 3,
    image: 'TiKan',
    number: 17,
  },
  {
    ID: 1,
    image: 'TuFli',
    number: 18,
  },
  {
    ID: 2,
    image: 'TuGmacha',
    number: 19,
  },
  {
    ID: 3,
    image: 'NayZa',
    number: 20,
  },
  {
    ID: 1,
    image: 'NouTbuk',
    number: 21,
  },
  {
    ID: 2,
    image: 'NoN',
    number: 22,
  },
  {
    ID: 3,
    image: 'NeMo',
    number: 23,
  },
  {
    ID: 1,
    image: 'NaRvon',
    number: 24,
  },
  {
    ID: 2,
    image: 'NiLufar guli',
    number: 25,
  },
  {
    ID: 3,
    image: 'NoBel',
    number: 26,
  },
  {
    ID: 1,
    image: 'NoK',
    number: 27,
  },
  {
    ID: 2,
    image: 'NeFt',
    number: 28,
  },
  {
    ID: 3,
    image: 'NeGr',
    number: 29,
  },
  {
    ID: 1,
    image: 'MuZ',
    number: 30,
  },
  {
    ID: 2,
    image: 'MoTor',
    number: 31,
  },
  {
    ID: 3,
    image: 'MuNchoq',
    number: 32,
  },
  {
    ID: 1,
    image: 'MuMiya',
    number: 33,
  },
  {
    ID: 2,
    image: 'MaRker',
    number: 34,
  },
  {
    ID: 3,
    image: 'MoL',
    number: 35,
  },
  {
    ID: 1,
    image: 'MoBil telefon',
    number: 36,
  },
  {
    ID: 2,
    image: 'MaKaron',
    number: 37,
  },
  {
    ID: 3,
    image: 'MikroFon',
    number: 38,
  },
  {
    ID: 1,
    image: 'MaGnit',
    number: 39,
  },
  {
    ID: 2,
    image: 'ReZinka',
    number: 40,
  },
  {
    ID: 3,
    image: 'RaTsiya',
    number: 41,
  },
  {
    ID: 1,
    image: 'RaNda',
    number: 42,
  },
  {
    ID: 2,
    image: 'Ro’Mol',
    number: 43,
  },
  {
    ID: 3,
    image: 'aRRa',
    number: 44,
  },
  {
    ID: 1,
    image: 'RuL',
    number: 45,
  },
  {
    ID: 2,
    image: 'RoBot',
    number: 46,
  },
  {
    ID: 3,
    image: 'RaKeta',
    number: 47,
  },
  {
    ID: 1,
    image: 'RaFaello',
    number: 48,
  },
  {
    ID: 2,
    image: 'RoGatka',
    number: 49,
  },
  {
    ID: 3,
    image: 'LaZer',
    number: 50,
  },
  {
    ID: 1,
    image: 'LaTta',
    number: 51,
  },
  {
    ID: 2,
    image: 'LeNta',
    number: 52,
  },
  {
    ID: 3,
    image: 'LiMon',
    number: 53,
  },
  {
    ID: 1,
    image: 'LoR',
    number: 54,
  },
  {
    ID: 2,
    image: 'LoLa',
    number: 55,
  },
  {
    ID: 3,
    image: 'LaB',
    number: 56,
  },
  {
    ID: 1,
    image: 'LaK',
    number: 57,
  },
  {
    ID: 2,
    image: 'LiFt',
    number: 58,
  },
  {
    ID: 3,
    image: 'LaGan',
    number: 59,
  },
  {
    ID: 1,
    image: 'BiZon',
    number: 60,
  },
  {
    ID: 2,
    image: 'BuTilka',
    number: 61,
  },
  {
    ID: 3,
    image: 'BaNan',
    number: 62,
  },
  {
    ID: 1,
    image: `Bo'Mba`,
    number: 63,
  },
  {
    ID: 2,
    image: 'BaRaban',
    number: 64,
  },
  {
    ID: 3,
    image: 'BoLta',
    number: 65,
  },
  {
    ID: 1,
    image: 'BoBo',
    number: 66,
  },
  {
    ID: 2,
    image: 'BoKal',
    number: 67,
  },
  {
    ID: 3,
    image: 'BuFer',
    number: 68,
  },
  {
    ID: 3,
    image: 'BeGemot',
    number: 69,
  },
  {
    ID: 3,
    image: 'Ko’Z',
    number: 70,
  },
  {
    ID: 3,
    image: 'KiTob',
    number: 71,
  },
  {
    ID: 3,
    image: 'KoNfet',
    number: 72,
  },
  {
    ID: 3,
    image: 'KaMon',
    number: 73,
  },
  {
    ID: 3,
    image: 'KaRtoshka',
    number: 74,
  },
  {
    ID: 3,
    image: 'KoLa',
    number: 75,
  },
  {
    ID: 3,
    image: 'KaBob',
    number: 76,
  },
  {
    ID: 3,
    image: 'KaKtus',
    number: 77,
  },
  {
    ID: 3,
    image: 'KoFe',
    number: 78,
  },
  {
    ID: 3,
    image: 'KenGuru',
    number: 79,
  },
  {
    ID: 3,
    image: 'FiZik (Eynshteyn)',
    number: 80,
  },
  {
    ID: 3,
    image: 'FuTbolka',
    number: 81,
  },
  {
    ID: 3,
    image: 'FeN',
    number: 82,
  },
  {
    ID: 3,
    image: 'FM radio',
    number: 83,
  },
  {
    ID: 3,
    image: 'FaRtuk',
    number: 84,
  },
  {
    ID: 3,
    image: 'FiL',
    number: 85,
  },
  {
    ID: 3,
    image: 'FBr xodimi',
    number: 86,
  },
  {
    ID: 3,
    image: 'FoKus shlyapasi',
    number: 87,
  },
  {
    ID: 3,
    image: 'FiFa kubogi',
    number: 88,
  },
  {
    ID: 3,
    image: 'FalGa',
    number: 89,
  },
  {
    ID: 3,
    image: 'GaZ',
    number: 90,
  },
  {
    ID: 3,
    image: 'GiTler',
    number: 91,
  },
  {
    ID: 3,
    image: 'GNom',
    number: 92,
  },
  {
    ID: 3,
    image: 'GuMma',
    number: 93,
  },
  {
    ID: 3,
    image: 'GitaRa',
    number: 94,
  },
  {
    ID: 3,
    image: 'GaLstuk',
    number: 95,
  },
  {
    ID: 3,
    image: 'GoBlin',
    number: 96,
  },
  {
    ID: 3,
    image: 'GulKaram',
    number: 97,
  },
  {
    ID: 3,
    image: 'GraFin',
    number: 98,
  },
  {
    ID: 3,
    image: 'GuGurt',
    number: 99,
  },
]
array.forEach((item) => {
    const card = document.createElement('div')
    card.setAttribute("class", "col-3 mx-auto p-3")
    card.classList.add('card');
  card.textContent = item.number

  card.addEventListener('click', () => {
    if (card.textContent === item.number.toString()) {
      card.textContent = item.image
    } else {
      card.textContent = item.number
    }
  })

  cardsContainer.appendChild(card)
})
cardsContainer2.style.display = 'none'
let elBtn = document.createElement('button')
elBtn.setAttribute('id', 'btnNewSistem2')
elBtn.innerHTML = ' Submt'
form.append(elBtn)
btnNewSistem.addEventListener('click', () => {
  cardsContainer.style.display = 'none'
  btnNewSistem.style.display = 'none'
  cardsContainer2.style.display = 'block'
})
btnNewSistem2.addEventListener('click', () => {
  cardsContainer.style.display = 'block'
  btnNewSistem.style.display = 'block'
  cardsContainer2.style.display = 'none'
})
array.forEach((item) => {
  let div = document.createElement('div')
  let label = document.createElement('label')
  label.innerHTML = `OBRZ ${item.number} ga`
  label.setAttribute('for', item.ID)
  let elInput = document.createElement('input')
  elInput.setAttribute('value', item.image)
  elInput.setAttribute('id', 'input2')
  elInput.setAttribute('data-id', item.number)
  div.append(label, elInput)
  form.append(div)
})
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let AllInput = document.querySelectorAll('#input2')
  AllInput.forEach((item) => {
    array.forEach((el) => {
      if (el.number == item.getAttribute('data-id')) {
        el.image = item.value
      }
    })
  })
})

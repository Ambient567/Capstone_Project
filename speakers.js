const Speakers = [{
    image: './pictures/spk.jpeg',
    name: 'Daniel Racliff ',
    role: 'Director at Tencent Holdings',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }, {
    image: './pictures/spk1.jpeg',
    name: 'Veronica Woods',
    role: 'Director at Tencent Holdings',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }, {
    image: './pictures/spk5.jpeg',
    name: 'Waren Smith',
    role: 'Director at Tencent Holdings',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }, {
    image: './pictures/spk4.jpeg',
    name: 'Jimmy Nilov',
    role: 'Director at Tencent Holdings',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }, {
    image: './pictures/spk6.jpeg',
    name: 'Amanda Natalia',
    role: 'Director at Tencent Holdings',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }, {
    image: './pictures/spk2.jpeg',
    name: 'Rebecca Moore',
    role: 'Director at Tencent Holdings',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  ];
  
  const card = document.querySelector('.speaker-container');
  
  Speakers.forEach((cards) => {
    const div = document.createElement('div');
    div.innerHTML += `
    <div class="speaker-card">
    <img src="${cards.image}">
    <div>
        <h3>${cards.name}</h3>
        <h5>${cards.role}</h5>
        <p>${cards.info}</p>
    </div>
    </div>
    `;
    card.append(div);
  });
const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');
let monsterImg = document.getElementById('monster');
let playerImg = document.getElementById('player');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  monsterImg.src = './assets/styles/mon2.png';
  if (monsterHealthBar.value > 40) {
    monsterImg.src = './assets/styles/mon3.png';
    // try to change status bar color
    // monsterHealthBar.style.backgroundColor = 'red';
  } else if (monsterHealthBar.value > 20) {
    monsterImg.src = './assets/styles/mon4.png';
  } else if (monsterHealthBar.value >= 5) {
    monsterImg.src = './assets/styles/mon5.png';
  }
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  playerImg.src = './assets/styles/monster2.png';
  if (playerHealthBar.value > 40) {
    playerImg.src = './assets/styles/player1.png';
  } else if (playerHealthBar.value > 20) {
    playerImg.src = './assets/styles/player2.png';
  } else if (playerHealthBar.value >= 5) {
    playerImg.src = './assets/styles/monster1.png';
  }
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
  monsterImg.src = './assets/styles/mon1.png';
  playerImg.src = './assets/styles/monster1.png';
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

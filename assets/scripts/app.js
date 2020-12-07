// some const are in all caps with underscores, to express they will never be changed or reasign. Individual practice and not a requirement.

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 20;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert(`the bonus life saved you!! Keep playing.`);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
    alert('Boo. You lost.');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('draw!');
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(attackMode) {
  let maxDamage;
  if (attackMode === 'ATACK') {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
  let maxHealValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert(`you can't heal to more than your max initial heal`);
    maxHealValue = chosenMaxLife - currentPlayerHealth;
  } else {
    maxHealValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

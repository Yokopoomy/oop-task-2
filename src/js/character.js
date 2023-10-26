class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }

  set name(value) {
    if (!(value.length >= 2 && value.length <= 10)) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  levelUp() {
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    if (this.health <= 0) {
      throw new Error('The character is dead');
    } else {
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('The character is dead');
    }
  }
}

export class Bowerman extends Character {
  constructor(health, level, levelUp, damage) {
    super(health, level, levelUp, damage);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(health, level) {
    super(health, level);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

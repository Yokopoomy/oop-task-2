class Character {
  constructor(name) {
    this.setName(name);
    this.health = 100;
    this.level = 1;
  }

  setName(name) {
    if (name.length <= 10 && name.length >= 2 && typeof name === 'string') {
      this.name = name;
    } else {
      throw new Error('Name must be between 2 and 10 characters');
    }
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
  constructor(name, health, level, levelUp, damage) {
    super(name, health, level, levelUp, damage);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

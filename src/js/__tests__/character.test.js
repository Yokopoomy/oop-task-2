import * as characters from '../character';

test('create Bowerman', () => {
  const bowerman = new characters.Bowerman();
  bowerman.name = 'Char1';

  expect(bowerman).toEqual(
    {
      _name: 'Char1',
      health: 100,
      level: 1,
      type: 'Bowerman',
      attack: 25,
      defence: 25,
    },
  );
});

test('create Swordsman', () => {
  const swordsman = new characters.Swordsman();
  swordsman.name = 'Char2';

  expect(swordsman).toEqual(
    {
      _name: 'Char2',
      health: 100,
      level: 1,
      type: 'Swordsman',
      attack: 40,
      defence: 10,
    },
  );
});

test('create Magician', () => {
  const magician = new characters.Magician();
  magician.name = 'Char3';

  expect(magician).toEqual(
    {
      _name: 'Char3',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    },
  );
});

test('create Undead', () => {
  const undead = new characters.Undead();
  undead.name = 'Char4';

  expect(undead).toEqual(
    {
      _name: 'Char4',
      health: 100,
      level: 1,
      type: 'Undead',
      attack: 25,
      defence: 25,
    },
  );
});

test('create Zombie', () => {
  const zombie = new characters.Zombie();
  zombie.name = 'Char5';

  expect(zombie).toEqual(
    {
      _name: 'Char5',
      health: 100,
      level: 1,
      type: 'Zombie',
      attack: 40,
      defence: 10,
    },
  );
});

test('create Daemon', () => {
  const daemon = new characters.Daemon();
  daemon.name = 'Char6';

  expect(daemon).toEqual(
    {
      _name: 'Char6',
      health: 100,
      level: 1,
      type: 'Daemon',
      attack: 10,
      defence: 40,
    },
  );
});

test('check long name', () => {
  expect(() => {
    function longName() {
      const char = new characters.Bowerman();
      char.name = 'LongCharacterName';
      return char;
    }
    longName();
  }).toThrow('Имя персонажа должно быть от 2 до 10 символов');
});

test('check short name', () => {
  expect(() => {
    const char = new characters.Bowerman();
    char.name = 'L';
    return char;
  }).toThrow('Имя персонажа должно быть от 2 до 10 символов');
});

test('check name string', () => {
  expect(() => {
    const char = new characters.Bowerman();
    char.name = 123;
    return char;
  }).toThrow('Имя персонажа должно быть "Тип - Строка"');
});

test('check get name', () => {
  const daemon = new characters.Daemon();
  daemon.name = 'Char6';

  expect(daemon.name).toEqual('Char6');
});

test('take damage', () => {
  const bowerman = new characters.Bowerman();
  bowerman.name = 'Char1';
  bowerman.damage(100);

  expect(bowerman).toEqual(
    {
      _name: 'Char1',
      health: 25,
      level: 1,
      type: 'Bowerman',
      attack: 25,
      defence: 25,
    },
  );
});

test('levelUp', () => {
  const bowerman = new characters.Bowerman('Char1');
  bowerman.name = 'Char1';
  bowerman.levelUp();

  expect(bowerman).toEqual(
    {
      _name: 'Char1',
      health: 100,
      level: 2,
      type: 'Bowerman',
      attack: 30,
      defence: 30,
    },
  );
});

test('LevelUp < 0 health', () => {
  const bowerman = new characters.Bowerman('Char1');
  bowerman.damage(150);

  expect(() => {
    bowerman.levelUp();
  }).toThrow();
});

test('Damage < 0 health', () => {
  const bowerman = new characters.Bowerman('Char1');
  bowerman.damage(150);

  expect(() => {
    bowerman.damage(10);
  }).toThrow();
});

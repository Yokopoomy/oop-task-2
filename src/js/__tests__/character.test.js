import * as characters from '../character';

test('create Bowerman', () => {
  const bowerman = new characters.Bowerman('Char1');

  expect(bowerman).toEqual(
    {
      name: 'Char1',
      health: 100,
      level: 1,
      type: 'Bowerman',
      attack: 25,
      defence: 25,
    },
  );
});

test('create Swordsman', () => {
  const swordsman = new characters.Swordsman('Char2');

  expect(swordsman).toEqual(
    {
      name: 'Char2',
      health: 100,
      level: 1,
      type: 'Swordsman',
      attack: 40,
      defence: 10,
    },
  );
});

test('create Magician', () => {
  const magician = new characters.Magician('Char3');

  expect(magician).toEqual(
    {
      name: 'Char3',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    },
  );
});

test('create Undead', () => {
  const undead = new characters.Undead('Char4');

  expect(undead).toEqual(
    {
      name: 'Char4',
      health: 100,
      level: 1,
      type: 'Undead',
      attack: 25,
      defence: 25,
    },
  );
});

test('create Zombie', () => {
  const zombie = new characters.Zombie('Char5');

  expect(zombie).toEqual(
    {
      name: 'Char5',
      health: 100,
      level: 1,
      type: 'Zombie',
      attack: 40,
      defence: 10,
    },
  );
});

test('create Daemon', () => {
  const daemon = new characters.Daemon('Char6');

  expect(daemon).toEqual(
    {
      name: 'Char6',
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
      const name = new characters.Bowerman('LongCharacterName');
      return name;
    }
    longName();
  }).toThrow('Name must be between 2 and 10 characters');
});

test('check short name', () => {
  expect(() => {
    characters.Bowerman('C');
  }).toThrow();
});

test('check name string', () => {
  const char = new characters.Bowerman('CharName');
  expect(typeof char.name).toBe('string');
});

test('take damage', () => {
  const bowerman = new characters.Bowerman('Char1');
  bowerman.damage(100);

  expect(bowerman).toEqual(
    {
      name: 'Char1',
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
  bowerman.levelUp();

  expect(bowerman).toEqual(
    {
      name: 'Char1',
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

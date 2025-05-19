import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Lovelace';
const role = 'Computer Scientist';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    // const character = new Character('Ada', 'Lovelace', 'Computer Scientist');

    const character = new Character(firstName, lastName, role);

    expect(character).toEqual({
      firstName,
      lastName,
      role,
      intelligence: expect.any(Number),
      strength: expect.any(Number),
      wisdom: expect.any(Number),
      dexterity: expect.any(Number),
      constitution: expect.any(Number),
      charisma: expect.any(Number),
      level: 1,
      lastModified: expect.any(Date),
      createdAt: expect.any(Date),
      id: expect.stringContaining('person-'),
    });

    // expect(character.firstName).toBe(firstName);
    // expect(character.lastName).toBe(lastName);
    // expect(character.role).toBe(role);
  });

  it.todo('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);

    character.levelUp();
    expect(character.level).toBe(2);
  });

  it.todo('should update the last modified date when leveling up', () => {});
});

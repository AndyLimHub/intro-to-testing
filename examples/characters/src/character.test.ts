import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Lovelace';
const role = 'Computer Scientist';

const character = new Character(firstName, lastName, role, 1, () => 15);

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      firstName,
      lastName,
      role,
      intelligence: 15,
      strength: 15,
      wisdom: 15,
      dexterity: 15,
      constitution: 15,
      charisma: 15,
      level: 1,
      lastModified: expect.any(Date),
      createdAt: expect.any(Date),
      id: expect.stringContaining('person-'),
    });
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);
    const initialLevel = character.level;

    character.levelUp();
    expect(character.level).toBe(2);
    character.levelUp();
    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const initialLastModified = character.lastModified;

    character.levelUp();
    expect(character.lastModified).not.toBe(initialLastModified);
  });
});

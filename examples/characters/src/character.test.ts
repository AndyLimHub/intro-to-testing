import { describe, it, expect, vi } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Lovelace';
const role = 'Computer Scientist';

describe('Character', () => {
  let character;
  vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
  beforeEach(() => {
    character = new Character(firstName, lastName, role, 1);
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      firstName,
      lastName,
      role,
      intelligence: 12,
      strength: 12,
      wisdom: 12,
      dexterity: 12,
      constitution: 12,
      charisma: 12,
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

  it('should roll four six-sided die', () => {
    const rollDiceMock = vi.fn(() => 15);
    const character = new Character(firstName, lastName, role, 1, rollDiceMock);
    expect(character.strength).toBe(15);
    expect(rollDiceMock).toHaveBeenCalledWith(4, 6);
    expect(rollDiceMock).toHaveBeenCalledTimes(6);
    console.log(rollDiceMock.mock.calls);
  });
});

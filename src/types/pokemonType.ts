/* ---------- Root ---------- */
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number | null;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  past_abilities: PokemonPastAbility[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  cries: PokemonCries;
  stats: PokemonStat[];
  past_stats: PokemonPastStat[];
  types: PokemonType[];
  past_types: PokemonPastType[];
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

/* ---------- API ---------- */
export interface NamedAPIResource {
  name: string;
  url: string;
}

/* ---------- Abilities ---------- */
export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonPastAbility {
  generation: NamedAPIResource;
  abilities: Array<{
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource | null;
  }>;
}

/* ---------- Game indices / held items ---------- */
export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: Array<{
    rarity: number;
    version: NamedAPIResource;
  }>;
}

/* ---------- Moves ---------- */
export interface PokemonMoveVersionDetail {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
  order: number | null;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersionDetail[];
}

/* ---------- Sprites ---------- */
export interface SpriteSet {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
}

export interface OfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}

export interface DreamWorldSprites {
  front_default: string | null;
  front_female: string | null;
}

export interface GenerationISprites {
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
}

export interface GenerationIISprites {
  front_default: string | null;
  front_shiny: string | null;
  front_transparent?: string | null;
  front_shiny_transparent?: string | null;
  back_default?: string | null;
  back_shiny?: string | null;
  back_transparent?: string | null;
  back_shiny_transparent?: string | null;
  animated?: {
    front_default: string | null;
    front_shiny: string | null;
  };
}

export interface GenerationIIISprites {
  front_default: string | null;
  front_shiny: string | null;
  back_default?: string | null;
  back_shiny?: string | null;
}

export interface GenerationVSprites extends SpriteSet {
  animated?: SpriteSet;
}

export interface IconSprites {
  front_default: string | null;
  front_female?: string | null;
  animated?: { front_default: string | null };
}

export interface PokemonSprites extends SpriteSet {
  other: {
    home: SpriteSet;
    showdown: SpriteSet;
    dream_world: DreamWorldSprites;
    "official-artwork": OfficialArtwork;
  };
  versions: {
    "generation-i": {
      "red-blue": GenerationISprites;
      yellow: GenerationISprites;
    };
    "generation-ii": {
      gold: GenerationIISprites;
      silver: GenerationIISprites;
      crystal: GenerationIISprites;
    };
    "generation-iii": {
      emerald: GenerationIIISprites;
      "firered-leafgreen": GenerationIIISprites;
      "ruby-sapphire": GenerationIIISprites;
    };
    "generation-iv": {
      "diamond-pearl": SpriteSet;
      "heartgold-soulsilver": SpriteSet;
      platinum: SpriteSet;
    };
    "generation-v": {
      "black-white": GenerationVSprites;
      icons?: IconSprites;
    };
    "generation-vi": {
      "omegaruby-alphasapphire": SpriteSet;
      "x-y": SpriteSet;
    };
    "generation-vii": {
      icons: IconSprites;
      "ultra-sun-ultra-moon": SpriteSet;
    };
    "generation-viii": {
      icons: IconSprites;
      "brilliant-diamond-shining-pearl": SpriteSet;
    };
    "generation-ix": {
      "scarlet-violet": SpriteSet;
    };
  };
}

/* ---------- Cries ---------- */
export interface PokemonCries {
  latest: string;
  legacy: string | null;
}

/* ---------- Stats / types ---------- */
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonPastStat {
  generation: NamedAPIResource;
  stats: PokemonStat[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonPastType {
  generation: NamedAPIResource;
  types: PokemonType[];
}

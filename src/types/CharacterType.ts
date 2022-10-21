export type ThumbnailType = {
  path: string;
  extension: string;
};

export type CharacterType = {
  id: number;
  description?: string;
  name: string;
  comics?: {
    items: [
      {
        name: string;
      },
    ];
  };
  series?: {
    items: [
      {
        name: string;
      },
    ];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
};

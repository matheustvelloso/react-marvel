export type ComicType = {
  id: number;
  title: string;
  description?: string | null;
  pageCount?: number;
  creators?: {
    available: number;
    items: [
      {
        name: string;
        role: string;
      },
    ];
  };
  stories?: {
    available: 2;

    items: [
      {
        name: string;
        type: string;
      },
    ];
  };
  series?: {
    name: string;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
};

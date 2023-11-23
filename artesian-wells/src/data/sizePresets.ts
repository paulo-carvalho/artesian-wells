const sizePresets = {
  instagram: {
    label: 'Instagram',
    types: {
      'post-square': {
        label: 'Post (Square)',
        width: 1080,
        height: 1080,
      },
      'post-portrait': {
        label: 'Post (Portrait)',
        width: 1080,
        height: 1350,
      },
      story: {
        label: 'Story',
        width: 1080,
        height: 1920,
      },
      reel: {
        label: 'Reel',
        width: 1080,
        height: 1920,
      },
      'profile-picture': {
        label: 'Profile Picture',
        width: 1024,
        height: 1024,
      },
    },
  },
  twitter: {
    label: 'Twitter',
    types: {
      post: {
        label: 'Post',
        width: 1600,
        height: 900,
      },
      header: {
        label: 'Header',
        width: 1500,
        height: 500,
      },
      'profile-picture': {
        label: 'Profile Picture',
        width: 1024,
        height: 1024,
      },
      ad: {
        label: 'Ad',
        width: 1600,
        height: 900,
      },
    },
  },
  whatsapp: {
    label: 'WhatsApp',
    types: {
      'profile-picture': {
        label: 'Profile Picture',
        width: 500,
        height: 500,
      },
      status: {
        label: 'Status',
        width: 1080,
        height: 1920,
      },
    },
  },
} satisfies Record<
  string,
  {
    label: string;
    types: Record<
      string,
      {
        label: string;
        width: number;
        height: number;
      }
    >;
  }
>;

export default sizePresets;

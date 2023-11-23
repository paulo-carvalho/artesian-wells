const sizePresets = {
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

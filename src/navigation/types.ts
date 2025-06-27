export type RootStackParamList = {
  Tabs: undefined;
  SectionScreen: {
    categoryName: string;
    endpoint: string;
    params: any;
  };
  MovieDetail: {
    id: number;
  };
};

export type MainTabParamList = {
  HomeTab: undefined;
  SearchScreen: undefined;
  Wishlist: undefined;
  ProfileTab: undefined;
};
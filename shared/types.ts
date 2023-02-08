export interface NASAApiAssetItem {
  href: string;
}

export type NASAApiAssetDetailResponse = {
  collection: {
    items: Array<NASAApiAssetItem>;
    version: string;
    href: string;
  };
};

export interface NASAApiCollectionItemData {
  description: string;
  keywords: string[];
  nasa_id: string;
  title: string;
}

export interface NASAApiCollectionItemLink {
  href: string;
  rel: string;
  render: string;
}

export interface NASAApiCollectionItem {
  data: NASAApiCollectionItemData[];
  links: NASAApiCollectionItemLink[];
}

export type NASAApiSearchResponse = {
  collection: {
    items: NASAApiCollectionItem[];
  };
};

export interface PhotoThumbItem {
  nasaId: string;
  title: string;
  href: string;
  description: string;
}

export interface PhotoItem {
  nasaId: string;
  orgHref: string;
}

export interface UploadedPhoto {
  name: string;
}

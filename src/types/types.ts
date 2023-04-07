export interface ICard {
  id: string;
  title: string;
  body: string;
  type: ICardType;
}

type ICardType = 'individual' | 'organisation' | 'project';

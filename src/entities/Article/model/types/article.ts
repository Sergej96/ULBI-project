import { User } from 'entities/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleCodeBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleCodeBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleTextBlock extends ArticleCodeBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}
export interface ArticleImageBlock extends ArticleCodeBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleView {
    GRID = 'GRID',
    LIST = 'LIST',
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    user: User;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

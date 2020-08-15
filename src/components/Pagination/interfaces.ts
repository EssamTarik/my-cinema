export interface IProps {
  page: number;
  totalPages: number;
  onNextClick: () => void;
  onPreviousClick: () => void;
}
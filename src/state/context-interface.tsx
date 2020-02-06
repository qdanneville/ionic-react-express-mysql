interface IContextProps {
  state: any;
  dispatch: ({
    type,
    payload
  }: {
    type: string;
    payload: any | null | undefined;
  }) => void;
}

export default IContextProps
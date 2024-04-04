import { TailSpin } from 'react-loader-spinner';
import { LoaderWrapp } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapp>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#3470ff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
      />
    </LoaderWrapp>
  );
};
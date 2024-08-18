import { FC, memo, useEffect, useState } from 'react';
import { Select } from 'src/shared/ui/Select';
import { Cities } from 'src/shared/types/cities.ts';
import { useAppDispatch } from 'src/shared/hooks/storeHooks.ts';
import { userFormAction } from '../../EditUserForm';

interface SelectCityProps {
  labelClassName?: string;
  selectClassName?: string;
  className?: string;
  value: string;
}

export const SelectCity: FC<SelectCityProps> = memo((props) => {
  const { className, selectClassName, labelClassName, value } = props;
  const dispatch = useAppDispatch();
  const [getCities, setGetCities] = useState<Cities[]>();
  const onChangeCity = (value: string) => {
    dispatch(userFormAction.changeCity(value));
  };

  const sortCities = (arrayCities: Cities[]): Cities[] => {
    const maxPopulation = arrayCities.sort(
      (item1, item2) => Number(item2.population) - Number(item1.population)
    )[0];

    const result = arrayCities
      .sort((item, item2) => item.city.localeCompare(item2.city))
      .filter((item) => item !== maxPopulation);

    return [maxPopulation, ...result];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import('../cities.json');
        const result = sortCities(data.default as Cities[]);
        await setGetCities(result);
        await dispatch(userFormAction.changeCity(result[0].city));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Select
      defaultValue={'123'}
      value={value}
      onChange={onChangeCity}
      arrayValue={getCities}
      labelClassName={labelClassName}
      selectClassName={selectClassName}
      className={className}
      labelName={'Ваш город'}
      required
    />
  );
});

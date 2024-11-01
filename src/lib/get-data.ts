import { getStrapiURL } from '@/config';

export async function fetchColorByName(name: string) {
  const { data } = await getStrapiURL(`/colors?filters[name][$eq]=${name}`);
  return data;
}

export async function fetchServicesByColor(colorId: string) {
  const { data } = await getStrapiURL(
    `/servicios?filters[color][id][$eq]=${colorId}&populate=*`
  );
  return data;
}

export async function deleteLastService(colorId: string) {
  const response = await getStrapiURL(
    `/servicios/deleteLastByColor/${colorId}`,
    {
      method: 'DELETE',
    }
  );
  return response;
}

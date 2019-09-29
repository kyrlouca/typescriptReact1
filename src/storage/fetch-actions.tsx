import React from 'react';
import axios from 'axios';
import { promises } from 'fs';

export type TFullOrder = {
  customerFirstName: string;
  customerLastName: string;
  dateCreated: string;
  HASH_ID: string;
  orderValue: number;
  SORT_ID: string;
  TABLE_NAME: string;
};

export default async function fetchActions(custId: string) {
  const AllData = await axios({
    method: 'get',
    url: `https://mmr2lzukua.execute-api.eu-west-2.amazonaws.com/Prod/orders`,
    params: { custX: custId }
  });

  const rData: TFullOrder[] = AllData.data.Items;
  return rData;
}

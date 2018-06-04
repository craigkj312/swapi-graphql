/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 * @flow strict
 */

import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { globalIdField } from 'graphql-relay';

import { nodeInterface } from '../relayNode';
import { createdField, editedField } from '../commonFields';
import { connectionFromUrls } from '../connections';
import { convertToNumber } from '../apiHelper';


/**
 * The GraphQL type equivalent of the Vehicle resource
 */
const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  description:
    'A user of the API.',
  fields: () => ({
    first_name: {
      type: GraphQLString,
      description: `The user's first name.`,
    },
    last_name: {
      type: GraphQLString,
      description: `The user's last name.`,
    },
    email: {
      type: GraphQLString,
      description: `The user's email.`,
    },
    id: globalIdField('viewers'),
  }),
  interfaces: () => [nodeInterface],
});

export default ViewerType;

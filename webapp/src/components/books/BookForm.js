import {connect} from '@loona/react';

import {AddBook} from '../../queries/book';
import {SubmitForm} from '../../common/SubmitForm';

const mapDispatch = dispatch => ({
  onValue: title => dispatch(new AddBook({title})),
});

export const BookForm = connect(mapDispatch)(SubmitForm);

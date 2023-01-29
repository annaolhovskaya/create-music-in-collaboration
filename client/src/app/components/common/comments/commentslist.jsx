import React from "react";
import PropTypes from "prop-types";
import Comment from "./comment/comment";

const Commentslist = ({ comments, onRemove }) => {
    return comments.map((comment) => (
        <Comment key={comment._id} onRemove={onRemove} {...comment} />
    ));
};

Commentslist.propTypes = {
    comments: PropTypes.array,
    onRemove: PropTypes.func
};

export default Commentslist;

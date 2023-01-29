import React, { useEffect } from "react";
import _ from "lodash";
import ContentWrapper from "./contentWrapper/contentWrapper";
import Commentslist from "../common/comments/commentslist";
import AddCommentForm from "../common/addCommentForm";
import { useDispatch, useSelector } from "react-redux";
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment
} from "../../store/comments";
import { useParams } from "react-router-dom";

const Comments = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCommentsList(userId));
    }, [userId]);

    const comments = useSelector(getComments());
    const isLoading = useSelector(getCommentsLoadingStatus());

    const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);

    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };

    const handleSubmit = (data) => {
        dispatch(createComment({ ...data, pageId: userId }));
    };

    return (
        <ContentWrapper>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <>
                    <h5 className="form__header">Комментарии</h5>
                    {!isLoading && (
                        <Commentslist
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    )}
                </>
            )}
        </ContentWrapper>
    );
};

export default Comments;

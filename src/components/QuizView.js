import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import getQuizController from "../utils/quiz";
import styles from "../styles";

import QuizCard from "./QuizCard";
import QuizResult from "./QuizResult";

class QuizView extends Component {
  state = {
    rightAnswers: 0
  };

  componentWillMount() {
    if (!this.quizCtrl) {
      this.quizCtrl = getQuizController(this.props.cards);
    }
  }

  restartQuiz = () => {
    this.quizCtrl = getQuizController(this.props.cards);
    this.setState({ rightAnswers: 0 });
  }

  addRightAnswer = (amount) => {
    const rightAnswers = this.state.rightAnswers + amount;
    this.setState({ rightAnswers });
  };

  getQuizCard = () => {
    const card = this.quizCtrl.getNextCard();
    
    return (
      <View style={styles.fill}>
        <Text style={[styles.text.info, styles.text.bold]}>{this.quizCtrl.getInfo()}</Text>
        <QuizCard
          card={card}
          setRightAnswer={() => this.addRightAnswer(1)}
          setWrongAnswer={() => this.addRightAnswer(0)}
        />
      </View>
    );
  };

  getQuizResult = () => {
    const { rightAnswers } = this.state;
    const { cards, id, navigation } = this.props;

    const results = {
      rightAnswers,
      wrongAnswers: cards.length - rightAnswers,
      performance: Math.round((rightAnswers / cards.length) * 100),
    };

    return (
      <QuizResult
        id={id}
        results={results}
        onRestart={this.restartQuiz}
        goBack={() => navigation.goBack()}
      />
    );
  };

  render() {
    const isOver = this.quizCtrl.isOver();
    
    return (
      <View style={styles.container}>
        <View style={[styles.card, styles.fill]}>
          { isOver ? this.getQuizResult() : this.getQuizCard() }
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, { route }) {
  const id = route.params.id;
  const deck = state[id];

  return {
    id,
    cards: (deck && deck.questions) || [],
  }
}

export default connect(mapStateToProps)(QuizView);

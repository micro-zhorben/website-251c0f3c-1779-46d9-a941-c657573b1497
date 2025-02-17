import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you prefer your coffee?",
    options: ["Strong", "Medium", "Mild"],
  },
  {
    id: 2,
    question: "What's your preferred brewing method?",
    options: ["Espresso", "Filter", "French Press", "Pour Over"],
  },
  {
    id: 3,
    question: "Do you add milk to your coffee?",
    options: ["Yes, always", "Sometimes", "Never"],
  },
];

export function CoffeeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Coffee Preference Quiz</CardTitle>
        <CardDescription>
          Let's find your perfect coffee match! Answer a few questions about your
          preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Typography.H3>{questions[currentQuestion].question}</Typography.H3>
          <RadioGroup
            onValueChange={handleAnswer}
            value={answers[questions[currentQuestion].id]}
          >
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="text-foreground"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
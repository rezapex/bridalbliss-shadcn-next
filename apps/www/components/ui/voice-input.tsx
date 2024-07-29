'use client';

import React, { useState } from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';

const VoiceInput: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startRecording = () => {
    setIsRecording(true);
    // Implement actual voice recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Implement stop recording and transcription logic here
  };

  return (
    <div className="voice-input p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`p-4 rounded-full transition-all duration-300 ${
            isRecording
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-primary hover:bg-primary-dark'
          }`}
        >
          {isRecording ? (
            <FaStop className="text-white text-xl" />
          ) : (
            <FaMicrophone className="text-white text-xl" />
          )}
        </button>
      </div>
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
      </p>
      {transcript && (
        <div className="mt-6 p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">Transcript:</h3>
          <p className="text-neutral-600 dark:text-neutral-300">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceInput;

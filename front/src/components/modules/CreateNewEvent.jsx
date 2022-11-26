import { BaseButton } from '../atoms/BaseButton';
import { InputBlock } from '../atoms/InputBlock';
import Modal from '../atoms/Modal';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const CreateEventForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleCanSubmit = () => {
    setCanSubmit(true);
  };
  const handleCannotSubmit = () => {
    setCanSubmit(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const methods = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (canSubmit) {
      console.log(data);
      //APIを叩く
      closeModal();
      handleCannotSubmit();
      //成功したら
      navigate('/new/complete');
    } else {
      handleCanSubmit();
      openModal();
    }
  };

  const eventName = methods.getValues('eventName');
  const participants = methods.getValues('participants');
  const totalAmount = methods.getValues('totalAmount');
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-screen-2xl px-4 md:px-8 mx-auto"
        id="createEventForm"
      >
        <Modal title="イベント作成確認" isOpen={isOpen} onClose={closeModal}>
          <p className="">以下の内容でイベントを作成してよろしいですか？</p>
          <div className="border shadow-sm m-5 p-3">
            <div className="flex">
              <p className="font-bold">イベント名</p>
              <p className="ml-4">{eventName}</p>
            </div>
            <div className="flex">
              <p className="font-bold">参加者</p>
              <p className="ml-4">{participants}人</p>
            </div>
            <div className="flex ">
              <p className="font-bold">合計金額</p>
              <p className="ml-4">{totalAmount}円</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <BaseButton
              label="キャンセル"
              color="bg-gray-500 text-white"
              type="button"
              onClick={() => {
                closeModal();
                handleCannotSubmit();
              }}
              size="w-full"
            />
            <BaseButton
              label="作成"
              color="bg-purple-600 hover:bg-purple-700 text-white"
              type="submit"
              form="createEventForm"
              size="w-full"
            />
          </div>
        </Modal>
        <InputBlock
          text="イベント名"
          subText="イベントの名前を入力してください"
          isRequired
          name="eventName"
          options={{ required: '必須項目です' }}
          type="text"
          placeholder="飲み会"
        />
        <InputBlock
          text="人数"
          subText="イベントの参加者の人数を入力してください"
          isRequired
          name="participants"
          options={{ required: '必須項目です' }}
          type="number"
          unit="人"
        />
        <InputBlock
          text="合計金額"
          subText="立て替えた合計金額を入力してください"
          isRequired
          name="totalAmount"
          options={{ required: '必須項目です' }}
          type="number"
          unit="円"
        />

        <div className="text-center mt-10">
          <BaseButton
            label="確認"
            color="bg-purple-600 hover:bg-purple-700 text-white"
            type="submit"
          />
        </div>
      </form>
    </FormProvider>
  );
};

import { BaseButton } from '../atoms/BaseButton';
import { InputBlock } from '../atoms/InputBlock';
import Modal from '../atoms/Modal';
import { useCreateEvent } from 'hooks/api/useCreateEvent';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const CreateEventForm = () => {
  const { createEvent } = useCreateEvent();
  const [isOpen, setIsOpen] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    if (canSubmit) {
      console.log(data);
      closeModal();
      handleCannotSubmit();
      //APIを叩く
      // createEvent(data);
      //飛ばす
      navigate('/new/complete', {
        state: { id: 5 }
      });
    } else {
      handleCanSubmit();
      openModal();
    }
  };

  const name = methods.getValues('name');
  const number = methods.getValues('number');
  const total_amount = methods.getValues('total_amount');
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
              <p className="ml-4">{name}</p>
            </div>
            <div className="flex">
              <p className="font-bold">参加者</p>
              <p className="ml-4">{number}人</p>
            </div>
            <div className="flex ">
              <p className="font-bold">合計金額</p>
              <p className="ml-4">{total_amount}円</p>
            </div>
            <div className="flex ">
              <p className="font-bold">一人当たり(100円単位)</p>
              <p className="ml-4">
                {Math.ceil((total_amount / number) * 0.01) / 0.01}円
              </p>
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
          name="name"
          options={{ required: '必須項目です' }}
          type="text"
          placeholder="飲み会"
        />
        <InputBlock
          text="人数"
          subText="イベントの参加者の人数を入力してください"
          isRequired
          name="number"
          options={{ required: '必須項目です' }}
          type="number"
          unit="人"
        />
        <InputBlock
          text="合計金額"
          subText="立て替えた合計金額を入力してください"
          isRequired
          name="total_amount"
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
